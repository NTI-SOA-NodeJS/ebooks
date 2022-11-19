const express = require("express");

const router = express.Router();

//TODO: create the method in controller
router.get("/:id", getAuthorById);

//TODO: create the method in controller
router.put("/:id", updateAuthorById);

//TODO: create the method in controller
router.delete("/:id", deleteAuthorById);

//TODO: create the method in controller
router.post("/", addNewAuthor);

//TODO: create the method in controller
router.get("/", GetAllAuthors);

module.exports = router;
