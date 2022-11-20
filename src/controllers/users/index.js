const { addNewUser } = require("./loginSystem/register.controller");
const { getAllUsers } = require("./manageUserData/getAllUsers.controller");
const {
  deleteUserById,
} = require("./manageUserData/deleteUserById.controller");
const { addNewRole } = require("./roles/addNewRole.controller");
const { getAllRoles } = require("./roles/getAllRoles.controller");

module.exports = {
  addNewUser,
  getAllUsers,
  addNewRole,
  getAllRoles,
  deleteUserById,
};
