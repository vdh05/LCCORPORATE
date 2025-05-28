import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();
const bookController = new BookController();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById); // New route for getting book by ID
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;