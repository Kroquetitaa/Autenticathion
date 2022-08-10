const BookRoutes = require('express').Router();
const { getAll, create } = require('./book.controller');

BookRoutes.get('/', getAll);
BookRoutes.post('/', create);

module.exports = BookRoutes;