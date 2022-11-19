const { DataTypes } = require("sequelize");

const Order_Item = (sequelize) =>
  sequelize.define("Order_Item", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = Order_Item;
