const express = require("express");
const controller = require("../../controllers/mails/mail.controller");

const router = express.Router();

router.post("/", controller.sendEmail);
module.exports = router;
