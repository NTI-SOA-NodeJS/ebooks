const { Role } = require("../../models/auth/Role.model")

exports.addNewRole =async (req, res) =>{
    try {
        const role = req.body
        const newRole = Role.create(ro)
    } catch (error) {
        console.log(`role can't be create => ${error}`);
    }
}