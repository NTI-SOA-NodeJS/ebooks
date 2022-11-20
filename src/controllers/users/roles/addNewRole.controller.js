const  Role  = require("../../../models/auth/Role.model");

exports.addNewRole = async (req, res) => {
  try {
    const role = req.body;
    console.log(role);
    const newRole = await Role.create(role);
    res.json({
      state: "ok",
      message: "rloe created successfully",
      data: newRole,
    });
  } catch (error) {
    console.log(`role can't be create => ${error}`);
  }
};
