const { DataTypes } = require("sequelize");
const Author_book = (sequelize) => {
  sequelize.define("Author_book", {
    book_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
    },
    author_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "authors",
        key: "id",
      },
    },
  });
};
module.exports = Author_book;
