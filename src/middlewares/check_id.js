exports.checkId = (req, res, next) => {
  var id = req.params.id;
  if (id) {
    next();
  } else {
    res.status(400).json({
        status:400,
        message:"id params is required"
    })
  }
};
