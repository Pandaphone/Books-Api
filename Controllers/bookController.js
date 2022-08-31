const router = require('express').Router()
const Books  = require('../Models/bookModel')


router.get('/', (req, res) => {
    Books.find()
    .then(books => {
      res.status(200).json(books)
    })
    .catch(err => {
      console.log(err) 
      res.status(400).json({ message: "Not what you're looking for? We have no idea either."})
    })
})

router.get('/:id', (req, res) => {
  Books.findById(req.params.id)
  .then(books => {
    res.status(200).json(books)
  })
  .catch(err => {
    console.log(err) 
    res.status(400).json({ message: "Not what you're looking for? We have no idea either."})
  })
})

router.post('/', (req, res) => {
  Books.create(req.body)
  .then(newBook => {
    console.log(req.body)
    res.status(200).json(newBook)
  })
  .catch(err => {
    console.log(err) 
    res.status(400).json({ message: "Book not created! We have no idea why."})
  })
})


router.put('/:id', (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body)
  .then(updatedBook => {
    console.log(req.body)
    res.status(200).json(updatedBook)
  })
  .catch(err => {
    console.log(err) 
    res.status(400).json({ message: "Book not updated! We have no idea why."})
  })
})

router.delete('/:id', (req, res) => {
  Books.findByIdAndDelete(req.params.id)
  .then(bookInfo => {
    res.status(200).json({ message: "Book deleted!"})
  })
  .catch(err => {
    console.log(err) 
    res.status(400).json({ message: "Book not deleted! We have no idea why."})
  })
})

module.exports = router