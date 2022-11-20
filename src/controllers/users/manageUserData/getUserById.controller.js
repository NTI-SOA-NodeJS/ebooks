const User = require("../../../models/auth/User.model");

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (user) {
      res.json({
        state: "ok",
        message: "user retrieved succesfully",
        data: user,
      });
    } else {
      res.json({ state: "failed", message: `user not found with key ${id}` });
      throw new Error(`user not found with key ${id}`);
    }
  } catch (error) {
    console.log(`user can't be retrieved => ${error}`);
  }
};
