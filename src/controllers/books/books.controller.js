const { Book, Author, Genre } = require("../../models/index");

exports.getBooksList = (req, res) => {
  //TODO: write code here.
  res.json({
    state: "get all books OK",
  });
};
exports.getBookById = (req, res) => {
  //TODO: write code here.
  var id = req.params.id;
  if (id) {
    var query = Book.findOne({ where: { id: id } });
    query.then((r) => {
      if (r) {
        res.json(r);
      } else {
        res.status(404).json({ status: "404" });
      }
    });
  }
};
exports.updateBookById = (req, res) => {
  //TODO: write code here.
};
exports.deleteBookById = (req, res) => {
  //TODO: write code here.
};
exports.addNewBook = (req, res) => {
  //TODO: write code here.
  let body = req.body;
  Book.create(body)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      console.log("err");
    });
};
exports.getBooksList = (req, res) => {
  //TODO: write code here.
  Book.findAll({ include: Author }).then((books) => {
    res.json(books);
  });
};
exports.deleteListOfBooks = (req, res) => {
  //TODO: write code here.
};
