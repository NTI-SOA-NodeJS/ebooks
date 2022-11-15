const Router = require("express");
const booksRoutes = require("./api/books.routes");

const routes = Router();

routes.use("/books", booksRoutes);

module.exports = {routes};