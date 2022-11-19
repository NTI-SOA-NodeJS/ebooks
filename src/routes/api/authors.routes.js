const express = require("express");
const  controller  = require("../../controllers/authors/authors.controller");
 
const router = express.Router();

//TODO: create the method in controller
router.get("/:id", controller.getAuthorById);

//TODO: create the method in controller
router.put("/:id", controller.updateAuthorById);

//TODO: create the method in controller
router.delete("/:id", controller.deleteAuthorById);

//TODO: create the method in controller
router.post("/", controller.addNewAuthor);

//TODO: create the method in controller
router.get("/", controller.getAllAuthors);

module.exports = router;
