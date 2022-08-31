const mongoose = require('mongoose')

const bookSchema  = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    year: {type: Number, required: false},
    quantity: {type: Number, required: false},
    imageURL: {type: String, required: false},
  })

  module.exports = mongoose.model('Book', bookSchema)