const express = require("express");
const  controller  = require("../../controllers/authors/authors.controller");
const { checkId } = require("../../middlewares/check_id");
 
const router = express.Router();

router.get("/:id",checkId, controller.getAuthorById);

router.put("/:id",checkId, controller.updateAuthorById);

router.delete("/:id",checkId, controller.deleteAuthorById);

router.post("/", controller.addNewAuthor);

router.get("/", controller.getAllAuthors);

module.exports = router;
