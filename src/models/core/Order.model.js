const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const Order = sequelize.define("Order", {
  total: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});

module.exports = Order;
