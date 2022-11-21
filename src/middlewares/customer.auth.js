const jwt = require("jsonwebtoken");
const config = require("../config");

exports.customer = (req, res, next) => {
  console.log("hello from super admin ");
  console.log(req.body.roleId);
  if (req.body.roleId === 3 && req.body.roleId === 2 && req.body.roleId === 1) {
    next();
  } else {
    res.json({
      status: "failed",
      message: "authorized only for customers and above",
    });
  }
};
