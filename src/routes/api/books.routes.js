const express = require("express");
const { getAllBooks } = require("../../controllers/books/books.controller");

const router = express.Router();

//TODO: create the method in controller
router.get("/:id", getBookById);

//TODO: create the method in controller
router.put("/:id", updateBookById);

//TODO: create the method in controller
router.delete("/:id", deleteBookById);

//TODO: create the method in controller
router.post("/", addNewBook);

router.get("/", getAllBooks);

//TODO: create the method in controller
router.delete("/", deleteListOfBooks);

module.exports = router;
