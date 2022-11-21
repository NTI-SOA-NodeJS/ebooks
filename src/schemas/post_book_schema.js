exports.postBookSchema = {
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
  required: ["title", "isbn", "url", "publishDate", "authorsIds", "genresIds"],
  additionalProperties: false,
};

//   {
//     "title": "book 1",
//     "isbn": "ISBN 10: 0768374464",
//     "url": "localhost:3000/assets/book.pdf",
//     "authersIds": [

//     ],
//     "publishDate": "2012-04-23T18:25:43.511Z",
//     "genresIds": [
//         1,
//         2
//     ]
// }
