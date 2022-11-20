const Email = require("../../../models/auth/Email.model");
const User = require("../../../models/auth/User.model");

const bcrypt = require("bcrypt");

exports.loginUser = async (req, res) => {
  try {
    const emailAddress = req.body.email;
    const plaintextPassword = req.body.password;
    const email = await Email.findOne({
      where: {
        isPrimary: true,
        email: emailAddress,
      },
    });
    if (email) {
      const userId = email.UserId;
      const user = await User.findByPk(userId);
      const hashPassword = user.password;
      console.log(`password: ${hashPassword}`);

      if (bcrypt.compareSync(plaintextPassword, hashPassword)) {
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
