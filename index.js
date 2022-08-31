// Require needed modules.
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

// Initialize the app object.
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello world!")
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connection Established! Host: ", process.env.MONGO_URI)
})

const bookController = require('./Controllers/bookController')
// Create a homepage route.
app.use('/books', bookController)



// Listen for connections.
app.listen(process.env.PORT)