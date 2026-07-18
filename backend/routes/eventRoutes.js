const {
    createEvent,
    getAllEvents,
    getEvent,
    deleteEvent,
    updateEvent
} = require('../Controllers/eventDetailsController')

//auth middleware -> protecting routes
const requireAuth = require('../middleware/requireAuth')

const express = require('express')
//multer -> image uploads
const multer = require('multer')
const path = require('path')
const router = express.Router()

/*const upload = multer({
    dest: 'uploads/'
})*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const uniqueName = `event-${Date.now()}${path.extname(file.originalname)}`
    cb(null, uniqueName)
    }
})
const upload = multer({ storage })

//routes
router.get('/', getAllEvents)

router.get('/:id', getEvent)


router.delete('/:id', deleteEvent)

router.patch('/:id', updateEvent)

//to protect only this route, other are accessible by anyone
router.post('/', requireAuth, upload.single('image'), createEvent)
//multer processes uploaded file then create event
module.exports = router