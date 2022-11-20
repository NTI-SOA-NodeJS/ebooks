const { Author } = require("../../models");
const { foundedOrNot, ResponseTemp } = require("../../utils/utils");

exports.getAuthorById = async (req, res) => {
  var id = req.params.id;
  var query = await Author.findOne({ where: { id: id } });
  foundedOrNot(res, query);
};

exports.updateAuthorById = async (req, res) => {
  var id = req.params.id;
  var body = req.body;
  await Author.update(body, { where: { id: id } });
  var query = await Author.findOne({ where: { id: id } });
  foundedOrNot(res, query);
};
exports.deleteAuthorById = async (req, res) => {
  var id = req.params.id;
  var d = await Author.destroy({ where: { id: id } });
  var status = d == 1 ? 200 : 404;
  ResponseTemp(res, status);
};
exports.addNewAuthor = async (req, res) => {
  var body = req.body;
  const [author, created] = await Author.findOrCreate({
    where: { name: body.name },
    defaults: body,
  });
  foundedOrNot(res, author);
};
exports.getAllAuthors = async (req, res) => {
  const page = req.query.page || 0;
  const len = req.query.len || 10;
  var lst = await Author.findAll({
    offset: parseInt(page) * parseInt(len),
    limit: parseInt(len),
  });
  res.json(listResponse(lst, page, len));
};
