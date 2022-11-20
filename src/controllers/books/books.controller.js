const { Book, Author, Genre, BookGenre } = require("../../models/index");

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
    var query = Book.findOne({ where: { id: id }, include: Genre });
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
      console.log(body.genresIds);
      const promises = [];
      body.genresIds.forEach(async(element) => {
       await BookGenre.create({
          BookId: book.id,
          GenreId: element,
        }).then(()=>{
          Book.findOne({ where: { id: book.id }, include: Genre }).then(
            (books) => {
              res.json(books);
            }
          );
        })
        console.log(`element: ${element}`);
        // promises.push(
         
        // );

      });
      
      // Promise.all(promises).then((arr) => {
      //   Book.findOne({ where: { id: book.id }, include: Genre }).then(
      //     (books) => {
      //       res.json(books);
      //     }
      //   );
      // });
    })

    .catch((err) => {
      console.log("err");
    });
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
