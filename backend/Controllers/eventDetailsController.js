
const eventDetails = require('../models/eventsModel')
const mongoose = require('mongoose')
//get all event details
const getAllEvents = async (req,res) => {
    const eventDetail = await eventDetails.find({}).sort({createdAt: -1})

    res.status(200).json(eventDetail)
}  

//get an eventDetail
const getEvent = async (req,res) => {   
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such event'})
}
    const eventDetail = await eventDetails.findById(id)
    if(!eventDetail){
        res.status(400).json({error: 'No such event'})
    }
    res.status(200).json(eventDetail)

}

//post event details
const createEvent =  async (req, res) => {
  const user_id = req.user._id

        const {
    organizer,
    contact_email,
    contact_phone,
    event_name,
    event_description,
    location,

    event_format,
    meeting_link,
    purpose,
    audience,


    event_date,
    start_time,
    end_time,
    
    capacity,       
    dress_code
    
} = req.body;

//const image = req.file ? req.file.filename : null
//the above worked because multer was saving the image in the uploads folder, now we are using 
// cloudinary storage so we need to get the image url from cloudinary
const image = req.file ? req.file.path : null;
//console.log(req.file);
//console.log(image);
console.log(req.file);
console.log("Cloudinary URL:", image);

//creating array for emptyFields
let emptyFields = []
if(!organizer){
    emptyFields.push('organizer')
}
if(!contact_email){
    emptyFields.push('contact_email')
}
if(!contact_phone){
    emptyFields.push('contact_phone')
}
if(!event_name){
    emptyFields.push('event_name')
}
if(!event_description){
    emptyFields.push('event_description')
}
if(!location){
    emptyFields.push('location')
}

if(!event_format){
    emptyFields.push('event_format')
}


if(!purpose){
    emptyFields.push('purpose')
}

if(!audience){
    emptyFields.push('audience')
}
if(!event_date){
    emptyFields.push('event_date')
}
if(!start_time){
    emptyFields.push('start_time')
}
if(!end_time){
    emptyFields.push('end_time')
}


if(!capacity){
    emptyFields.push('capacity')
}
if(!dress_code){
    emptyFields.push('dress_code')
}

if(emptyFields.length > 0){
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
}
if(!/^\d{4}-\d{2}-\d{2}$/.test(event_date)){
    return res.status(404).json({error: 'Invalid date format'})
}
if(!/^0\d{9}$/.test(contact_phone)){
    return res.status(404).json({error: 'Invalid Phone Number format'})
}

try{
   
   const eventDetail = await eventDetails.create({
    organizer,
    contact_email,
    contact_phone,
    event_name,
    event_description,
    location,

    event_format,
    meeting_link,
    purpose,
    audience,

    event_date,
    start_time,
    end_time,
    image,
    capacity,       
    dress_code,
    user_id})
    res.status(200).json(eventDetail)
    //for error forgot to save images above
}
catch(error){
    res.status(400).json({error: error.message})
} 
}
const deleteEvent = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such event'})
}
    const eventDetail = await eventDetails.findOneAndDelete({_id: id})
    if(!eventDetail){
        res.status(400).json({error: 'No such event'})
    }
    res.status(200).json(eventDetail)
}

const updateEvent = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such event'})
}
    const eventDetail = await eventDetails.findOneAndUpdate({_id: id}, {
        ...req.body //so updating particular fields
    })
    if(!eventDetail){
        res.status(400).json({error: 'No such event'})
    }
    res.status(200).json(eventDetail)
}

module.exports = {
    createEvent,
    getAllEvents,
    getEvent,
    deleteEvent,
    updateEvent
}
    
