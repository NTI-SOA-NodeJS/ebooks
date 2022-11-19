const { DataTypes } = require("sequelize");

const Order = (sequelize) =>
  sequelize.define("Order", {
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

module.exports = Order;
