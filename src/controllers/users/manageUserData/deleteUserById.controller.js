const User = require("../../../models/auth/User.model");

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.destroy({
      where: {
        id: id
      },
    });
    res.json({state: 'ok', message:'user deleted successuflly', data: deletedUser})
  } catch (error) {
    console.log(`role can't be create => ${error}`);
  }
};
