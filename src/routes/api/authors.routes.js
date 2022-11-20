const express = require("express");
const  controller  = require("../../controllers/authors/authors.controller");
const { checkId } = require("../../middlewares/check_id");
 
const router = express.Router();

//TODO: create the method in controller
router.get("/:id",checkId, controller.getAuthorById);

//TODO: create the method in controller
router.put("/:id",checkId, controller.updateAuthorById);

//TODO: create the method in controller
router.delete("/:id",checkId, controller.deleteAuthorById);

//TODO: create the method in controller
router.post("/", controller.addNewAuthor);

//TODO: create the method in controller
router.get("/", controller.getAllAuthors);

module.exports = router;
