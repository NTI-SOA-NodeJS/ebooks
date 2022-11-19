const { config } = require("../config");
const Sequelize = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.db_host,
    dialect: config.dialect,
  }
);

const Author = require("../models/core/Author.model")(sequelize);
const Genre = require("../models/core/Genre.model")(sequelize);
const Book = require("../models/core/Book.model")(sequelize);
// const Author_book = require("../models/core/Author_Book")(sequelize);
// const Book_Genre = require("../models/core/Book_Genre")(sequelize);
const Order_Item = require("../models/core/Order_Item.model")(sequelize);
const Order = require("../models/core/Order.model")(sequelize);

const Role = require("../models/auth/Role.model")(sequelize);
const User = require("../models/auth/User.model")(sequelize);
const Email = require("../models/auth/Email.model")(sequelize);

module.exports = {
  sequelize,
  Author,
  Genre,
  Book,
  Order,
  Order_Item,
  User,
  Role,
  Email,
};
