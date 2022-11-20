const Author = require("./core/Author.model");
const Genre = require("./core/Genre.model");
const Book = require("./core/Book.model");

Book.belongsToMany(Author, { through: "BooksAuthor" });
Author.belongsToMany(Book, { through: "BooksAuthor" });

Book.belongsToMany(Genre, { through: "BooksGenre" });
Genre.belongsToMany(Book, { through: "BooksGenre" });

module.exports = { Author, Genre, Book };
