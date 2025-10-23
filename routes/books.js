const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' }
];

// READ ALL
router.get('/', (req, res) => {
  res.json(books);
});

// READ BY ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// CREATE
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: 'Title and author are required' });
  const book = { id: books.length + 1, title, author };
  books.push(book);
  res.status(201).json(book);
});

// UPDATE
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
});

// DELETE
router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
