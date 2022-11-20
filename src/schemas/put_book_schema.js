exports.putBookSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    isbn: { type: "string" },
    url: { type: "string" },
    publishDate: { type: "string", format: "date-time" },
    authorsIds: {
      type: "array",
      items: { type: "integer" },
    },
    genresIds: {
      type: "array",
      items: { type: "integer" },
    },
  },
  required: [], //["title", "isbn", "url", "publishDate", "authorsIds", "genresIds"],
  additionalProperties: false,
};

