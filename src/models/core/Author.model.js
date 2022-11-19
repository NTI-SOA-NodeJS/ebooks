const { DataTypes } = require("sequelize");
const Author = (sequelize) => {
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // author_books_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "author_books",
    //     key: "id",
    //   },
    // },
  });
};
module.exports = Author;
