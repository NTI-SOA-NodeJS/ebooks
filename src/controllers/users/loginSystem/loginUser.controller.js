const Email = require("../../../models/auth/Email.model");
const User = require("../../../models/auth/User.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { config } = require("../../../config");

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
      const role_id = user.RoleId;
      const hashPassword = user.password;
      console.log(`password: ${hashPassword}`);

      if (bcrypt.compareSync(plaintextPassword, hashPassword)) {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { emailAddress, role: role_id, userId },
          config.jwt,
          { expiresIn: maxAge }
        );
        res
          .cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          })
          .json({
            status: "ok",
            message: "logged in successfully",
            data: user,
            token,
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
