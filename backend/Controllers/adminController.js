const eventDetails = require('../models/eventsModel')
const mongoose = require('mongoose')

const getAllDashEvents = async (req,res) => {
    const eventDetail = await eventDetails.find({}).sort({createdAt: -1})
    //now filtering based on the status, as public events 
    //shouldnt display drafts
    res.status(200).json(eventDetail)
}  



module.exports = {
    getAllDashEvents
}