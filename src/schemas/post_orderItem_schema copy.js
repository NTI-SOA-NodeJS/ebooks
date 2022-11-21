exports.postOrderItemSchema = {
  type: "object",
  properties: {
    bookId: { type: "integer" },
    orderId: { type: "integer" },
    quantity: { type: "integer", minimum: 1 },
  },
  required: ["bookId", "orderId", "quantity"],
  additionalProperties: false,
};
