const Book = require('./book.model');
const { setError } = require('../../helpers/error');

const getAll = async(req, res, next) => {
    try {
        const books = await Book.find();
        return res.json({
            status: 200,
            message: 'Recovered all books',
            data: { books: books }
        })
    } catch (error) {
        return next( setError(500, "Failed recovering all books"));
    }
};

const create = async(req, res, next) => {
    try {
        const newBook = new Book(req.body);
        const newBookInDB = await newBook.save();
        return res.json({
            status: 201,
            message: 'New book created',
            data: { book: newBookInDB },
        })
    } catch (error) {
        return next(setError(500,'Failed creating book'));
    }
}

module.exports = { getAll, create };