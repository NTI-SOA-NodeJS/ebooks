const { Email } = require("../../../models");
const User = require("../../../models/auth/User.model");

exports.addNewUser = async (req, res) => {
  try {
    const user = req.body;
    const email = req.body.email;

    console.log(user);
    const newUser = await User.create(user);
    const newEmail = await Email.create({ email, isPrimary: true });
    newUser.addEmail(newEmail);

    res.json({ state: "ok", message: "user created!!", data: newUser });
  } catch (error) {
    console.log(`user can't be registered => ${error}`);
  }
};
