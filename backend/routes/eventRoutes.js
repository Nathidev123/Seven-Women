const {
    createEvent,
    getAllEvents,
    getEvent,
    deleteEvent,
    updateEvent
} = require('../Controllers/eventDetailsController')

const {
    getAllDashEvents
} = require('../Controllers/adminController')

//auth middleware -> protecting routes
const requireAuth = require('../middleware/requireAuth')

const express = require('express')
//multer -> image uploads
//now using cloudinary storage
const multer = require('multer')

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");


const router = express.Router()

/*const upload = multer({
    dest: 'uploads/'
})*/
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "community-events",
        allowed_formats: ["jpg", "jpeg", "png", "webp"]
    }
});

const upload = multer({ storage });

//routes
router.get('/', getAllEvents)
router.get('/admin', requireAuth, getAllDashEvents)
//proteted dash route as well
router.get('/:id', getEvent)


router.delete('/:id', deleteEvent)

router.patch(
    '/:id',
    requireAuth,
    upload.single('image'),
    updateEvent
)
//changed so that Cloudinary can process replacement images as well

//to protect only this route, other are accessible by anyone
router.post('/', requireAuth, upload.single('image'), createEvent)
//multer processes uploaded file then create event
module.exports = router