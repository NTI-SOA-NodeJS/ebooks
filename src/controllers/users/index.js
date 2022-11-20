const { addNewUser } = require("./loginSystem/register.controller");
const { getAllUsers } = require("./manageUserData/getAllUsers.controller");
const { addNewRole } = require("./roles/addNewRole.controller");

module.exports = { addNewUser, getAllUsers, addNewRole };
