const { Author } = require("../../models");
const {
  foundedOrNot,
  ResponseTemp,
  listResponse,
  generalHandler,
} = require("../../utils/utils");

exports.getAuthorById = async (req, res) => {
  generalHandler(res, async () => {
    var id = req.params.id;
    var query = await Author.findOne({ where: { id: id } });
    foundedOrNot(res, query);
  });
};

exports.updateAuthorById = async (req, res) => {
  generalHandler(res, async () => {
    var id = req.params.id;
    var body = req.body;
    await Author.update(body, { where: { id: id } });
    var query = await Author.findOne({ where: { id: id } });
    foundedOrNot(res, query);
  });
};
exports.deleteAuthorById = async (req, res) => {
  generalHandler(res, async () => {
    var id = req.params.id;
    var d = await Author.destroy({ where: { id: id } });
    var status = d == 1 ? 200 : 404;
    ResponseTemp(res, status);
  });
};
exports.addNewAuthor = async (req, res) => {
  generalHandler(res, async () => {
    var body = req.body;
    const [author, created] = await Author.findOrCreate({
      where: { name: body.name },
      defaults: body,
    });
    foundedOrNot(res, author);
  });
};
exports.getAllAuthors = async (req, res) => {
  generalHandler(res, async () => {
    const page = req.query.page || 0;
    const len = req.query.len || 10;
    var lst = await Author.findAll({
      offset: parseInt(page) * parseInt(len),
      limit: parseInt(len),
    });
    res.json(listResponse(lst, page, len));
  });
};
