const { DataTypes } = require("sequelize");

const Genre = (sequelize) =>
  sequelize.define("Genre", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // book_genres_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "book_genres",
    //     key: "id",
    //   },
    // },
  });

module.exports = Genre;
