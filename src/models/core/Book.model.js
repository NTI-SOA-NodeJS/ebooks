const { DataTypes } = require("sequelize");

const Book = (sequelize) =>
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

module.exports = Book;
