const {
  Book,
  Author,
  Genre,
  BookGenre,
  BookAuthor,
} = require("../../models/index");
const {
  generalHandler,
  foundedOrNot,
  handleSchema,
  ResponseTemp,
  listResponse,
} = require("../../utils/utils");

const { postBookSchema } = require("../../schemas/post_book_schema");
const { putBookSchema } = require("../../schemas/put_book_schema");
const { Op } = require("sequelize");

const AddBookGenre = async (bookId, genresIds) => {
  for (const i of genresIds) {
    var query = await Genre.findOne({ where: { id: i } });
    if (query) {
      await BookGenre.create({
        BookId: bookId,
        GenreId: query.id,
      });
    }
  }
};
const AddBookAuthor = async (bookId, authorsIds) => {
  for (const i of authorsIds) {
    var query = await Author.findOne({ where: { id: i } });
    if (query) {
      await BookAuthor.create({
        BookId: bookId,
        AuthorId: query.id,
      });
    }
  }
};

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
  generalHandler(res, async () => {
    var body = req.body;
    const id = req.params.id;
    const confirm = handleSchema(putBookSchema, body);
    if (confirm) {
      const update = await Book.update(body, { where: { id: id } });
      console.log(`update ${update}`);
      if (update == 1) {
        if (body.genresIds) {
          await BookGenre.destroy({ where: { BookId: id } });
          await AddBookGenre(id, body.genresIds);
        }
        if (body.authorsIds) {
          await BookAuthor.destroy({ where: { BookId: id } });
          await AddBookAuthor(id, body.authorsIds);
        }
      }
      var query = await Book.findOne({
        where: { id: id },
        include: [Author, Genre],
      });

      foundedOrNot(res, query);
    }
  });
};
exports.deleteBookById = (req, res) => {
  generalHandler(res, async () => {
    var id = req.params.id;
    var d = await Book.destroy({ where: { id: id } });
    var status = d == 1 ? 200 : 404;
    ResponseTemp(res, status);
  });
};

exports.addNewBook = (req, res) => {
  generalHandler(res, async () => {
    var body = req.body;
    const confirm = handleSchema(postBookSchema, body);
    if (confirm) {
      const book = await Book.create(body);
      await AddBookGenre(book.id, body.genresIds);
      await AddBookAuthor(book.id, body.authorsIds);
      var r = await Book.findOne({
        where: { id: book.id },
        include: [Genre, Author],
      });
      res.json(r);
    }
  });
};

exports.getBooksList = (req, res) => {

  generalHandler(res, async () => {
    const page = req.query.page || 0;
    const len = req.query.len || 10;
    const searchValue = req.query.searchValue;
    const authorsIds = req.query.authorsIds;
    const genresIds = req.query.genresIds;
    var lst = await Book.findAll({
      include: [
        genresIds != null
          ? {
              model: Genre,
              through: {
                where: { GenreId: { [Op.in]: JSON.parse(genresIds) } },
              },
            }
          : Genre,
        authorsIds != null
          ? {
              model: Author,
              through: {
                where: { AuthorId: { [Op.in]: JSON.parse(authorsIds) } },
              },
            }
          : Author,
      ],
      where:
        searchValue != null
          ? {
              title: { [Op.substring]: searchValue },
              Genres:{}
            }
          : {},

      offset: parseInt(page) * parseInt(len),
      limit: parseInt(len),
    });
    res.json(listResponse(lst, page, len));
  });
};
