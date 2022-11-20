const Email = require("../../../models/auth/Email.model");
const User = require("../../../models/auth/User.model");

exports.loginUser = async (req, res) => {
  try {
    const emailAddress = req.body.email;
    const password = req.body.password;
    const email = await Email.findOne({
      where: {
        isPrimary: true,
        email: emailAddress,
      },
    });
    if (email) {
      const userId = email.UserId;
      const user = await User.findByPk(userId);
      const realPassword = user.password;
      console.log(`password: ${realPassword}`);

      if (realPassword === password) {
        res.json({
          status: "ok",
          message: "logged in successfully",
          data: user,
        });
      } else {
        res.json({ status: "failed", message: "wrong password" });
      }
    } else {
      res.json({ status: "failed", message: "wrong email" });
    }
  } catch (error) {
    console.log(`can't log in => ${error}`);
  }
};
