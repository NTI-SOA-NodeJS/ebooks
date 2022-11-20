const express = require("express");
const controller = require("../../controllers/genres/genres.controller");
const router = express.Router();
const { checkId } = require("../../middlewares/check_id");

//TODO: create the method in controller
router.get("/:id",checkId, controller.getGenreById);

//TODO: create the method in controller
router.put("/:id", controller.updateGenreById);

//TODO: create the method in controller
router.delete("/:id", controller.deleteGenreById);

//TODO: create the method in controller
router.post("/", controller.addNewGenre);

//TODO: create the method in controller
router.get("/", controller.getAllGenres);

module.exports = router;
