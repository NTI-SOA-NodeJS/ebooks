const { Genre } = require("../../models/index");
const {
  foundedOrNot,
  ResponseTemp,
  listResponse,
} = require("../../utils/utils");

exports.getGenreById = async (req, res) => {
  var id = req.params.id;
  var query = await Genre.findOne({ where: { id: id } });
  foundedOrNot(res, query);
};
exports.updateGenreById = async (req, res) => {
  var id = req.params.id;
  var body = req.body;
  await Genre.update(body, { where: { id: id } });
  var query = await Genre.findOne({ where: { id: id } });
  foundedOrNot(res, query);
};
exports.deleteGenreById = async (req, res) => {
  var id = req.params.id;
  var d = await Genre.destroy({ where: { id: id } });
  var status = d == 1 ? 200 : 404;
  ResponseTemp(res, status);
};
exports.addNewGenre = async (req, res) => {
  var body = req.body;
  const [genre, created] = await Genre.findOrCreate({
    where: { name: body.name },
    defaults: body,
  });
  // const genre = await Genre.create(body);
  foundedOrNot(res, genre);
};
exports.getAllGenres = async (req, res) => {
  const page = req.query.page || 0;
  const len = req.query.len || 10;
  var lst = await Genre.findAll({
    offset: parseInt(page) * parseInt(len),
    limit: parseInt(len),
  });
  res.json(listResponse(lst, page, len));
};
