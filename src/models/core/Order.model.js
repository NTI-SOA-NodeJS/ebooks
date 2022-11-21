const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const Order = sequelize.define("Order", {
  total: DataTypes.STRING,
  isOpen: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Order;
