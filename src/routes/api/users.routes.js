const express = require("express");
const controller = require("../../controllers/users/index");
const router = express.Router();

router.post('/role/create', addNewRole)
//TODO: create the method in controller
router.get("/", controller.getAllUsers);

//TODO: create the method in controller
// router.put("/update", controller.updateUserById);

//TODO: create the method in controller
router.post("/register", controller.addNewUser);

//TODO: create the method in controller
// router.delete("/delete", controller.deleteUserById);

//TODO: create the method in controller
// router.get("/:id", controller.getUserById);

//TODO: create the method in controller
// router.put("/role", controller.updateUserRole);

//TODO: create the method in controller
// router.post("/email", controller.addEmailToUser);

//TODO: create the method in controller
// router.post("/login", controller.loginUser);

//TODO: create the method in controller
// router.get("/logout", controller.logoutUser);

module.exports = router;
