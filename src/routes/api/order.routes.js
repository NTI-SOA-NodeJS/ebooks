const express = require("express");
const controller = require("../../controllers/order/order.controller");

const router = express.Router();

// router.get("/:id",checkId, controller.getBookById);

// router.put("/:id",checkId, controller.updateBookById);

// //TODO: create the method in controller
// router.delete("/:id",checkId, controller.deleteBookById);

router.post("/", controller.addNewOrder);
router.post("/orderItem", controller.addNewOrderItem);

// router.get("/", controller.getBooksList);

module.exports = router;
