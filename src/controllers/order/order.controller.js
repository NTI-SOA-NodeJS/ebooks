const { Author } = require("../../models");
const Order = require("../../models/core/Order.model");
const OrderItem = require("../../models/core/Order_Item.model");
const Email = require("../../models/auth/Email.model");
const {
  postOrderItemSchema,
} = require("../../schemas/post_orderItem_schema copy");
const {
  foundedOrNot,
  ResponseTemp,
  listResponse,
  generalHandler,
  handleSchema,
} = require("../../utils/utils");
const jwt = require("jsonwebtoken");
const { config } = require("../../config");

// exports.getAuthorById = async (req, res) => {
//   generalHandler(res, async () => {
//     var id = req.params.id;
//     var query = await Author.findOne({ where: { id: id } });
//     foundedOrNot(res, query);
//   });
// };

// exports.updateAuthorById = async (req, res) => {
//   generalHandler(res, async () => {
//     var id = req.params.id;
//     var body = req.body;
//     await Author.update(body, { where: { id: id } });
//     var query = await Author.findOne({ where: { id: id } });
//     foundedOrNot(res, query);
//   });
// };
// exports.deleteAuthorById = async (req, res) => {
//   generalHandler(res, async () => {
//     var id = req.params.id;
//     var d = await Author.destroy({ where: { id: id } });
//     var status = d == 1 ? 200 : 404;
//     ResponseTemp(res, status);
//   });
// };

exports.openOrder = async (req, res) => {
  generalHandler(res, async () => {
    const userId = req.body.loginUserId;
    const order = await Order.create({ UserId: userId });
    res.json({
      status: "ok",
      message: `order opened use order id: ${order.id} to add books in order items page `,
      data: order,
    });
  });
};

exports.addNewOrderItem = async (req, res) => {
  generalHandler(res, async () => {
    const { BookId, quantity } = req.body;
    const OrderId = req.params.orderId;
    const orderItem = OrderItem.create({ quantity, BookId, OrderId });
    console.log(orderItem);
    res.json({
      status: "ok",
      message: `items added to order with id: ${OrderId}`,
      data: orderItem,
    });
  });
};

exports.closeOrder = async (req, res) => {
  generalHandler(res, async () => {
    const id = req.params.id;
    const order = Order.update(
      { isOpen: false },
      {
        where: {
          id,
        },
      }
    );
    res.json({status:'ok', message :'order closed successuffly', data: order});
  });
};
// exports.getAllOrders = async (req, res) => {
//   generalHandler(res, async () => {
//     const page = req.query.page || 0;
//     const len = req.query.len || 10;
//     var lst = await Order.findAll({
//       offset: parseInt(page) * parseInt(len),
//       limit: parseInt(len),
//     });
//     res.json(listResponse(lst, page, len));
//   });
// };
exports.getAllOrders = async (req, res) => {
  generalHandler(res, async () => {
    var lst = await Order.findAll();
    res.json(lst);
  });
};
exports.getAllOrderItems = async (req, res) => {
  generalHandler(res, async () => {
    var lst = await OrderItem.findAll();
    res.json(lst);
  });
};
