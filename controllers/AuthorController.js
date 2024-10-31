import Author from '../models/Author.js'; 
import Book from '../models/Book.js'; 

export const createAuthor = async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
};

export const getBooksByAuthor = async (req, res) => {
  const books = await Book.find({ author: req.params.authorId }).populate('author');

  res.status(200).json(books);
};

export const getBooksCountofAuthor = async(req, res) =>{
  const books = await Book.aggregate([
    {
      $group: {
        _id: "$author",
        count: { $sum: 1 }, 
      },
    },
  ])

  res.status(200).json(books); 
}
export const getBooks = async (req, res) => {
  try {
    const books = await Book.aggregate([
      {
        $project: {
          title: 1,
          firstChar: { $toLower: { $substrCP: ["$title", 0, 1] } }, 
        },
      },
      {
        $sort: {
          firstChar: -1, 
        },
      },
      {
        $skip: 5
      }
    ]);

  let booksarr = [];
   for (let index = 0; index < books.length; index++) {
    // const element = array[index];

    console.log(books[index].title);

    booksarr[index] =  {
      title: books[index].title
    }
    
   }

    res.status(200).json(booksarr);
  } catch (error) {
    console.error('Error fetching sorted books:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
