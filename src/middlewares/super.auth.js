const jwt = require("jsonwebtoken");
const config = require("../config");

exports.superAdmin = (req, res, next) => {
  console.log("hello from super admin ");
  console.log(req.body.roleId);
  if (req.body.roleId === 1) {
    next();
  } else {
    res.json({
      status: "failed",
      message: "authorized only for super admins",
    });
  }
};
