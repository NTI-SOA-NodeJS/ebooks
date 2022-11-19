const express = require("express");
const  controller  = require("../../controllers/books/books.controller");
const router = express.Router();

router.get("/:id", controller.getBookById);

//TODO: create the method in controller
router.put("/:id", controller.updateBookById);

//TODO: create the method in controller
router.delete("/:id", controller.deleteBookById);

//TODO: create the method in controller
router.post("/", controller.addNewBook);

router.get("/", controller.getBooksList);

//TODO: create the method in controller
router.delete("/", controller.deleteListOfBooks);

module.exports = router;
