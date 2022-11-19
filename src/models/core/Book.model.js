const { DataTypes } = require("sequelize");

const Book = (sequelize) => {
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
    // author_books_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "author_books",
    //     key: "id",
    //   },
    // },
    // book_genres_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "book_genres",
    //     key: "id",
    //   },
    // },
  });
};

module.exports = Book;
