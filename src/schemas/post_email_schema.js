exports.postEmailSchema = {
  type: "object",
  properties: {
    // from: { type: "string" },
    to: {
      type: "array",
      items: { type: "integer" },
    },
    subject: { type: "string" },
    text: { type: "string" },
    html: { type: "string" },
    booksIds:  {
      type: "array",
      items: { type: "integer" },
    },
  },
  required: ["to", "subject", "text", "booksIds"],
  additionalProperties: false,
};
