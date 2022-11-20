const User = require("../../../models/auth/User.model");

exports.addNewUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const newUser = await User.create(user);
    res.json({ state: 'ok', message: "user created!!" });
  } catch (error) {
    console.log(`user can't be registered => ${error}`);
  }
};
