require('dotenv').config()

const mongoose = require('mongoose')
const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/user')
const path = require('path')

const express = require('express')

const app = express()

app.use(express.json())

//setting up local middleware
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome'})
})

//userRoutes
app.use('/api/user', userRoutes)

app.use('/api/mainroutes/', eventRoutes)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log('Connected and Listening on port 7000')
})
})


