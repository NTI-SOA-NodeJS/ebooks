const jwt = require("jsonwebtoken");
const { config } = require("../config");

exports.protect = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const token = bearerHeader.split(" ")[1];
    const verifiedToken = jwt.verify(token, config.jwt);
    if (verifiedToken) {
      req.body.roleId = verifiedToken.role;
      req.body.loginUserId = verifiedToken.userId;
      console.log(`req.body.loginUserId: ${req.body.loginUserId}`);
      next();
    }
  } else {
    res.json({ status: "failed", message: "token not valid or not found" });
  }
};
