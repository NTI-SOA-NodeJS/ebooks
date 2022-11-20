const User = require("../../../models/auth/User.model");

exports.addEmailToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const email = req.body;
    const user = await User.findByPk(userId);
    if (user) {
      const newEmail = await user.addEmail(email);
      res.json({
        state: "ok",
        message: `email: ${newEmail} created and attached to user: ${user} succesfully`,
        data: { user, email: newEmail },
      });
    } else {
      res.json({
        state: "failed",
        message: `user not found with key ${userId}`,
      });
      throw new Error(`user not found with key ${userId}`);
    }
  } catch (error) {
    console.log(`email can't be created => ${error}`);
  }
};
