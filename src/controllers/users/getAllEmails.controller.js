const { Email } = require("../../models");

exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.findAll();
    res.json({ state: "ok", message: "all emails retrieved", data: emails });
  } catch (error) {
    console.log(`can't retrieve emails => ${error}`);
  }
};
