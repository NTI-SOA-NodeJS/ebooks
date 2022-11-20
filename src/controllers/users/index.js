const { addNewUser } = require("./loginSystem/register.controller");
const { loginUser } = require("./loginSystem/loginUser.controller");
const { logoutUser } = require("./loginSystem/logoutUser.controller");
const { getAllUsers } = require("./manageUserData/getAllUsers.controller");
const {
  deleteUserById,
} = require("./manageUserData/deleteUserById.controller");
const { getUserById } = require("./manageUserData/getUserById.controller");
const {
  updateUserRole,
} = require("./manageUserData/updateUserRole.controller");
const {
  addEmailToUser,
} = require("./manageUserData/addEmailToUser.controller");
const {
  updateUserById,
} = require("./manageUserData/updateUserById.controller");

const { getAllEmails } = require("./getAllEmails.controller");

const { addNewRole } = require("./roles/addNewRole.controller");
const { getAllRoles } = require("./roles/getAllRoles.controller");

module.exports = {
  addNewUser,
  getAllUsers,
  addNewRole,
  getAllRoles,
  deleteUserById,
  getUserById,
  updateUserRole,
  addEmailToUser,
  getAllEmails,
  loginUser,
  logoutUser,
  updateUserById,
};
