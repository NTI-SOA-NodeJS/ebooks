const  Role  = require("../../../models/auth/Role.model");

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json({
      state: "ok",
      message: "roles retrieved successfully",
      data: roles,
    });
  } catch (error) {
    console.log(`role can't be create => ${error}`);
  }
};
