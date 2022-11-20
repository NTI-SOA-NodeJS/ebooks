const Author = require("./core/Author.model");
const Genre = require("./core/Genre.model");
const Book = require("./core/Book.model");
const Role = require("./auth/Role.model");
const User = require("./auth/User.model");
const Email = require("./auth/Email.model");

Book.belongsToMany(Author, { through: "BooksAuthor" });
Author.belongsToMany(Book, { through: "BooksAuthor" });

Book.belongsToMany(Genre, { through: "BooksGenre" });
Genre.belongsToMany(Book, { through: "BooksGenre" });

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Email);
Email.belongsTo(User);
module.exports = { Author, Genre, Book, Role, User, Email };
