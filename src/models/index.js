const Author = require("./core/Author.model");
const Genre = require("./core/Genre.model");
const Book = require("./core/Book.model");
const sequelize = require("../database/sequelize");
const Role = require("./auth/Role.model");
const User = require("./auth/User.model");
const Email = require("./auth/Email.model");
const BookAuthor = sequelize.define("BookAuthor");
const BookGenre = sequelize.define("BookGenre");

Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

Book.belongsToMany(Genre, { through: BookGenre });
Genre.belongsToMany(Book, { through: BookGenre });

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(Email);
Email.belongsTo(User);
module.exports = {
  Author,
  Genre,
  Book,
  BookGenre,
  BookAuthor,
  User,
  Role,
  Email,
};
