const express = require("express");

const router = express.Router();

//TODO: create the method in controller
router.get("/", getAllUsers);

//TODO: create the method in controller
router.put("/", updateUserById);

//TODO: create the method in controller
router.post("/", addNewUser);

//TODO: create the method in controller
router.delete("/", deleteUserById);

//TODO: create the method in controller
router.get("/", getUserById);

//TODO: create the method in controller
router.put("/role", updateUserRole);

//TODO: create the method in controller
router.post("/email", addEmailToUser);


//TODO: create the method in controller
router.post("/login", loginUser);

//TODO: create the method in controller
router.get("/logout", logoutUser);





module.exports = router;
