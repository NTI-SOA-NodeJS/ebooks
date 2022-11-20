const Author = require("./core/Author.model");
const Genre = require("./core/Genre.model");
const Book = require("./core/Book.model");
const sequelize = require("../database/sequelize");
const BookAuthor = sequelize.define("BookAuthor");
const BookGenre = sequelize.define("BookGenre");

Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

Book.belongsToMany(Genre, { through: BookGenre });
Genre.belongsToMany(Book, { through: BookGenre });
module.exports = { Author, Genre, Book, BookGenre, BookAuthor };
