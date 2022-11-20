const { Email } = require("../../../models");
const User = require("../../../models/auth/User.model");

User.methods;
exports.addNewUser = async (req, res) => {
  try {
    const { email, ...user } = req.body;
    // console.log(`email: ${email}
    // password: ${password}
    //  user: ${JSON.stringify(user)}`);
    const newUser = await User.create(user);
    const newEmail = await Email.create({ email, isPrimary: true });
    newUser.addEmail(newEmail);

    res.json({ state: "ok", message: "user created!!", data: newUser });
  } catch (error) {
    console.log(`user can't be registered => ${error}`);
  }
};
