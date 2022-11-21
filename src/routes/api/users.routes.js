const express = require("express");
const controller = require("../../controllers/users/index");
const { protect } = require("../../middlewares/auth");
const { superAdmin } = require("../../middlewares/super.auth");
const router = express.Router();
//done
router.post("/roles", protect, superAdmin, controller.addNewRole);
//done
router.get("/roles", protect, superAdmin, controller.getAllRoles);
//done
router.get("/", controller.getAllUsers);
//
router.get("/emails", controller.getAllEmails);
//TODO: create the method in controller
router.put("/update/:id", controller.updateUserById);

//done
router.post("/register", controller.addNewUser);

//done
router.delete("/delete/:id", controller.deleteUserById);

//done
router.get("/:id", controller.getUserById);

//done
router.put("/role", controller.updateUserRole);

//done
router.post("/emails/:userId", controller.addEmailToUser);

//done
router.post("/login", controller.loginUser);

//TODO: create the method in controller
router.get("/logout", controller.logoutUser);

module.exports = router;
