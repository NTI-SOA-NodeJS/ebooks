const { DataTypes } = require("sequelize");

const Book = (sequelize) =>
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Book;