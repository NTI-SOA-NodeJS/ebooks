const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");

const Email = sequelize.define("Email", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Email;
