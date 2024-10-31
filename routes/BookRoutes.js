import express from 'express';
import * as bookController from '../controllers/BookController.js'; 

const router = express.Router();

router.post('/:authorId', bookController.createBook); 
router.post('/bookscount', bookController.createBook); 
router.get('/bookswithauthor', bookController.newBookCollection); 

export default router;
