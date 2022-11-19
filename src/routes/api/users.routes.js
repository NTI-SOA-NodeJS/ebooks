const express = require("express");
const controller = require("../../controllers/users/users.controller");
const router = express.Router();

//TODO: create the method in controller
router.get("/", controller.getAllUsers);

//TODO: create the method in controller
router.put("/", controller.updateUserById);

//TODO: create the method in controller
router.post("/", controller.addNewUser);

//TODO: create the method in controller
router.delete("/", controller.deleteUserById);

//TODO: create the method in controller
router.get("/", controller.getUserById);

//TODO: create the method in controller
router.put("/role", controller.updateUserRole);

//TODO: create the method in controller
router.post("/email", controller.addEmailToUser);

//TODO: create the method in controller
router.post("/login", controller.loginUser);

//TODO: create the method in controller
router.get("/logout", controller.logoutUser);

module.exports = router;
