const { Book, Author, Genre, BookGenre } = require("../../models/index");
const { generalHandler, foundedOrNot } = require("../../utils/utils");
// const AJV = require("ajv");
const AJV = require("ajv").default;
const addFormats = require("ajv-formats").default;
const { postBookSchema } = require("../../schemas/post_book_schema");
exports.getBooksList = (req, res) => {
  //TODO: write code here.
  res.json({
    state: "get all books OK",
  });
};
exports.getBookById = (req, res) => {
  generalHandler(res, async () => {
    var id = req.params.id;
    var query = await Book.findOne({
      where: { id: id },
      include: [Author, Genre],
    });
    foundedOrNot(res, query);
  });
};
exports.updateBookById = (req, res) => {
  //TODO: write code here.
};
exports.deleteBookById = (req, res) => {
  //TODO: write code here.
};

exports.addNewBook = (req, res) => {
  generalHandler(res, () => {
    const ajv = new AJV();
    addFormats(ajv);
    const validate = ajv.compile(postBookSchema);
    const valid = validate(req.body);
    console.log(validate.errors);
    if (!valid) throw validate.errors;
  });

  // Book.create(body)
  //   .then((book) => {
  //     console.log(body.genresIds);
  //     const promises = [];
  //     body.genresIds.forEach(async (element) => {
  //       await BookGenre.create({
  //         BookId: book.id,
  //         GenreId: element,
  //       }).then(() => {
  //         Book.findOne({ where: { id: book.id }, include: Genre }).then(
  //           (books) => {
  //             res.json(books);
  //           }
  //         );
  //       });
  //       console.log(`element: ${element}`);
  //     });
  //   })

  //   .catch((err) => {
  //     console.log("err");
  //   });
};

exports.getBooksList = (req, res) => {
  //TODO: write code here.
  Book.findAll({ include: [Author, Genre] }).then((books) => {
    res.json(books);
  });
};
exports.deleteListOfBooks = (req, res) => {
  //TODO: write code here.
};
