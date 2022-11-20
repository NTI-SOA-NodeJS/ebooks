const { ResponseTemp } = require("../utils/utils");

exports.checkId = (req, res, next) => {
  var id = req.params.id;
  if (parseInt(id)) {
    next();
  } else {
    // res.status(400).json({
    //   status: 400,
    //   message: "id parameter is require an integer value.",
    // });
    ResponseTemp(res,400,"id parameter is require an integer value.")
  }
};


