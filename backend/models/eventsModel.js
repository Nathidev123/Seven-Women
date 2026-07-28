const mongoose = require("mongoose");

const Schema = mongoose.Schema

const eventDetailsSchema = new Schema({
    organizer: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        required: true
    },
    contact_phone: {
        type: Number,
        required: true
    },
    event_name: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },    
    location: {
        type: String,
        required: true
    },


    event_format: {
    type: String,
    enum: [
        "In Person",
        "Online",
        "Hybrid"
    ],
    required: true
    },

    /*of course optional*/
    meeting_link: {
    type: String
    },


    purpose: {
    type: String,
    enum: [
        "Peacebuilding",
        "Community Dialogue",
        "Youth Empowerment",
        "Women's Empowerment",
        "Healing & Reconciliation",
        "Remembrance & Memorial",
        "Violence Prevention",
        "Education & Awareness",
        "Leadership Development",
        "Community Service",
        "Fundraising",
        "Networking"
    ],
    required: true
},
audience: {
    type: [String],
    enum: [
        "Everyone",
        "Children",
        "Youth",
        "Young Adults",
        "Adults",
        "Seniors",
        "Women",
        "Men",
        "Families",
        "Parents & Guardians",
        "Students",
        "Educators",
        "Community Leaders",
        "Faith Communities",
        "Volunteers",
        "Professionals"
    ],
    required: true
},
    image: {
        type: String      
    },


    event_date: {
        type: Date,
        required: true
    },
    start_time: {
        type: String,
        required: true
        //removed event date 
    },
    end_time: {
        type: String,
        required: true
    },


    capacity: {
        type: Number,
        required: true
    },
    dress_code: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, 
{timestamps: true}


)
module.exports = mongoose.model('eventDetails', eventDetailsSchema)
