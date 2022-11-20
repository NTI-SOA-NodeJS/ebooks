const User = require("../../models/index");
exports.addNewUser = async (req, res) => {
  try {
    const user = req.body;
    await User.create(user);
    res.json({state: ok,message:'user created'
    })
  } catch (error) {
    console.log(`user can't be registered => ${error}`);
  }
};
