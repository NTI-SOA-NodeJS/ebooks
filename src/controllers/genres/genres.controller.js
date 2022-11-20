const { Genre } = require("../../models/index");

exports.getGenreById =async (req, res) => {
  var id = req.params.id;
  var query = await Genre.findOne({ where: { id: id }});
  res.json(query)
};
exports.updateGenreById = (req, res) => {
  //TODO: write code here.
};
exports.deleteGenreById = (req, res) => {
  //TODO: write code here.
};
exports.addNewGenre = async (req, res) => {
  //TODO: write code here.
  var body = req.body;

  const [genre, created] = await Genre.findOrCreate({
    where: { name: body.name },
    defaults: { name: body.name },
  });
  res.json(genre);

  // .then((r) => {
  //   if (r) {
  //     res.json(r);
  //   } else {
  //     res.status(404).json({ status: "404" });
  //   }
  // })
  // .catch((error) => {
  //   res.status(404).json({ err: error });
  // });
  // Genre.findOne({ where: { id:  } }).then((r) => {
  //   res.json(r);
  // });
};
exports.getAllGenres = (req, res) => {
  //TODO: write code here.
};
