const Role = require("../../../models/auth/Role.model");
const { generalHandler } = require("../../../utils/utils");

exports.getAllRoles = async (req, res) => {
  generalHandler(res, async () => {
    const roles = await Role.findAll();
    res.json({
      state: "ok",
      message: "roles retrieved successfully",
      data: roles,
    });
  });
};
