const Role = require("../../../models/auth/Role.model");
const User = require("../../../models/auth/User.model");

exports.updateUserRole = async (req, res) => {
  try {
    const userId = req.query.userId;
    const roleId = req.query.roleId;
    const role = await Role.findByPk(roleId);
    const user = await User.findByPk(userId);
    if (user && role) {
      const updatedUser = User.update(
        { RoleId: roleId },
        { where: { id: userId } }
      );
      res.json({
        state: "ok",
        message: "user updated successfully",
        data: user,
      });
    } else {
      res.json({ state: "failed", message: "not valid user key or role key" });
      throw new Error(`not valid user key: ${userId} or role key: ${roleId}`);
    }
  } catch (error) {
    console.log(`Failed to update user ${error}`);
  }
};
