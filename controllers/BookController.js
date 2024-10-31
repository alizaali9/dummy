import Book from '../models/Book.js'; 

export const createBook = async (req, res) => {
  const book = new Book({ ...req.body, author: req.params.authorId });
  await book.save();
  res.status(201).json(book);
}; 


export const newBookCollection = async (req, res) => {
  const books = await Book.aggregate([
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "author",
        as: "user_details",
      },
    },
  ]);
  res.status(200).json(books);
};
