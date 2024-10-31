import express from 'express';
import mongoose from 'mongoose';
import AuthorRoutes from "./routes/AuthorRoutes.js";
import BookRoutes from "./routes/BookRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/practice')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use modular routing
app.use('/authors', AuthorRoutes);
app.use('/books', BookRoutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
