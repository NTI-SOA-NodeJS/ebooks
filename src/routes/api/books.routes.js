const express = require("express");
const controller = require("../../controllers/books/books.controller");
const { checkId } = require("../../middlewares/check_id");

const router = express.Router();

router.get("/:id",checkId, controller.getBookById);

//TODO: create the method in controller
router.put("/:id",checkId, controller.updateBookById);

//TODO: create the method in controller
router.delete("/:id",checkId, controller.deleteBookById);

//TODO: create the method in controller
router.post("/", controller.addNewBook);

router.get("/", controller.getBooksList);


module.exports = router;
