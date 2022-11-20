const { DataTypes } = require("sequelize");
const sequelize = require("../../database/sequelize");
const bcrypt = require("bcrypt");
const { config } = require("../../config");

const User = sequelize.define(
  "User",
  {
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
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    hooks: {
      afterValidate: (user) => {
        const rounds = bcrypt.genSaltSync(Number(config.rounds));
        user.password = bcrypt.hashSync(user.password, rounds);
      },
      beforeUpdate: (user) => {
        const rounds = bcrypt.genSaltSync(Number(config.rounds));
        user.password = bcrypt.hashSync(user.password, rounds);
      },
    },
  }
);

module.exports = User;
