const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");

const Genre = sequelize.define("Genre", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
