const Sequelize = require("sequelize");
const { config } = require("../config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.db_host,
    dialect: config.dialect,
  }
);


module.exports = {sequelize}