const User = require("../../../models/auth/User.model");

exports.updateUserById = async (req, res) => {
  try {
    const { name, phone, birthDate, password } = req.body;
    const id = req.params.id;
    const updatedUser =await User.update(
      { name, phone, birthDate, password },
      {
        where: {
          id,
        },
      }
    );
    res.json({
      status: "ok",
      message: "user updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(`user can't be updated => ${error}`);
  }
};
