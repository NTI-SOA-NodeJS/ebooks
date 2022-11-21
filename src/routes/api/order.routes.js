const express = require("express");
const controller = require("../../controllers/order/order.controller");
const { protect } = require("../../middlewares/auth");

const router = express.Router();

// router.get("/:id",checkId, controller.getBookById);

// router.put("/:id",checkId, controller.updateBookById);

// //TODO: create the method in controller
// router.delete("/:id",checkId, controller.deleteBookById);

router.post("/", controller.openOrder);
router.get("/", controller.getAllOrders);
router.get("/orderItems", controller.getAllOrderItems);
router.post("/:id",  controller.closeOrder);
router.post("/orderItem/:orderId", controller.addNewOrderItem);

// router.get("/", controller.getBooksList);

module.exports = router;
