const jwt = require("jsonwebtoken");
const config = require("../config");

exports.superAdmin = (res, req, next) => {
  const token = req.headers["authorization"];
  console.log(`token: ${token}`);
  if (roleId === 1) {
    next();
  } else {
    res.json({
      status: "failed",
      message: "authorized only for super admins",
    });
  }
};
