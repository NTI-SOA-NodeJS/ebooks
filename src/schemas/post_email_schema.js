exports.postEmailSchema = {
  type: "object",
  properties: {
    from: { type: "string" },
    to: { type: "string" },
    subject: { type: "string" },
    text: { type: "string" },
    html: { type: "string" },
    book: { type: "integer" },
  },
  required: ["from", "to", "subject", "text", "book"],
  additionalProperties: false,
};
