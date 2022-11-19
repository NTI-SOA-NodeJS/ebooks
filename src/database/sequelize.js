const { config } = require("../config");
const Sequelize = require("sequelize");
// const { Author, Book } = require("../models/index");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.db_host,
    dialect: config.dialect,
  }
);

const Author = (sequelize, DataTypes) => {
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

const Book = (sequelize, DataTypes) => {
  sequelize.define("Author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
Author(sequelize, Sequelize.DataTypes);
Book(sequelize, Sequelize.DataTypes);
console.log(`truth is : ${Book.hasMany}`);
// Book.belongsToMany(Author, { through: "Author_Books" });
// Author.belongsToMany(Book, {
//   through: "Author_Books",
// });

module.exports = {
  sequelize,
};
