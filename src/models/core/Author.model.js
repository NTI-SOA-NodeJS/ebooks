const { DataTypes } = require("sequelize");

const Author = (sequelize) =>
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Author;
