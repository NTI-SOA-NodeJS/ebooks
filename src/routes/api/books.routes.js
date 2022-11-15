const express = require("express");
const { getAllBooks } = require("../../controllers/books/books.controller");

const routes = express.Router();

routes.route("/").get(getAllBooks);

module.exports = routes ;
