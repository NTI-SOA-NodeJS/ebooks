const express = require("express");
const controller = require("../../controllers/genres/genres.controller");
const router = express.Router();
const { checkId } = require("../../middlewares/check_id");

router.get("/:id",checkId, controller.getGenreById);

router.put("/:id",checkId, controller.updateGenreById);

router.delete("/:id",checkId, controller.deleteGenreById);

router.post("/", controller.addNewGenre);

router.get("/", controller.getAllGenres);

module.exports = router;
