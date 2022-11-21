const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const OrderItem = sequelize.define("OrderItem", {
  quantity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = OrderItem;
