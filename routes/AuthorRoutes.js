import express from 'express';
import * as authorController from '../controllers/AuthorController.js'; 

const router = express.Router();

router.post('/', authorController.createAuthor);
router.get('/:authorId/books', authorController.getBooksByAuthor);
router.get('/books', authorController.getBooksCountofAuthor);
router.get('/books/sorted', authorController.getBooks);

export default router;
