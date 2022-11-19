const { DataTypes } = require("sequelize");

const Email = (sequelize) =>
  sequelize.define("Email", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_Id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "users",
    //     key: "id",
    //   },
    // },
  });

module.exports = Email;
