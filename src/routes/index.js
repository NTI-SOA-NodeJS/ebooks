const Router = require("express");
const booksRoutes = require("./api/books.routes");
const genresRoutes = require("./api/genres.routes");
const authorsRoutes = require("./api/authors.routes");
const usersRoutes = require("./api/users.routes");
const mailRoutes = require("./api/email.routes");
const ordersRoutes = require("./api/order.routes");

const routes = Router();
routes.get("/", (req, res) => {
  res.json({ state: "OK" });
});

routes.use("/email", mailRoutes);
routes.use("/orders", ordersRoutes);
routes.use("/books", booksRoutes);
routes.use("/genres", genresRoutes);
routes.use("/authors", authorsRoutes);
routes.use("/users", usersRoutes);

module.exports = { routes };
