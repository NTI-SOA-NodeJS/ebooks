const User = require("../../../models/auth/User.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      state: "ok",
      message: "all users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.log(`can't retrieve users => ${error}`);
  }
};
