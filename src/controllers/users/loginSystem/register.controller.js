const { Email } = require("../../../models");
const User = require("../../../models/auth/User.model");
const { generalHandler } = require("../../../utils/utils");

User.methods;
exports.addNewUser = async (req, res) => {
  generalHandler(res, async () => {
    const { email, ...user } = req.body;
    // console.log(`email: ${email}
    // password: ${password}
    //  user: ${JSON.stringify(user)}`);
    const newUser = await User.create(user);
    const newEmail = await Email.create({ email, isPrimary: true });
    newUser.addEmail(newEmail);

    res.json({ state: "ok", message: "user created!!", data: newUser });
  });
};
