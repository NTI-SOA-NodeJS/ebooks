const { DataTypes } = require("sequelize");
const Book_Genre = (sequelize) => {
  sequelize.define("Book_Genre", {
    book_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
    },
    genre_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genres",
        key: "id",
      },
    },
  });
};
module.exports = Book_Genre;
