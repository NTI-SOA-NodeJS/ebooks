const { DataTypes } = require("sequelize");

const User = (sequelize) =>
  sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // role_Id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "roles",
    //     key: "id",
    //   },
    // },
  });

module.exports = User;
