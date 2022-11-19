const { DataTypes } = require("sequelize");
const Author = require("./Author.model");
const sequelize = require("../../database/sequelize");

const Book = (sequelize, DataTypes) => {
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
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    
  });
};

module.exports = Book;
