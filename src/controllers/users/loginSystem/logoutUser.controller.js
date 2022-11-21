const { generalHandler } = require("../../../utils/utils");

exports.logoutUser = (req, res) => {
  generalHandler(res, async () => {
    req.headers["authorization"] = null;
    console.log(`token: ${req.headers["authorization"]}`);
    res.json({
      status: "ok",
      message: "logged out !!",
    });
  });
};
