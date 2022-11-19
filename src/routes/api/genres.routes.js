const express = require("express");

const router = express.Router();

//TODO: create the method in controller
router.get("/:id", getGenreById);

//TODO: create the method in controller
router.put("/:id", updateGenreById);

//TODO: create the method in controller
router.delete("/:id", deleteGenreById);

//TODO: create the method in controller
router.post("/", addNewGenre);

//TODO: create the method in controller
router.get("/", GetAllGenres);

module.exports = router;
