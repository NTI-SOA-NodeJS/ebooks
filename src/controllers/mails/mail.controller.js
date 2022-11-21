const { text } = require("express");
const nodemailer = require("nodemailer");
const { Book } = require("../../models/index");
const { postEmailSchema } = require("../../schemas/post_email_schema");
const { generalHandler, handleSchema } = require("../../utils/utils");
exports.sendEmail = async (req, res) => {
  generalHandler(res, async () => {
    var body = req.body;

    const confirm = handleSchema(postEmailSchema, body);
    if (confirm) {
      let testAccount = await nodemailer.createTestAccount(
        async (err, account) => {
          console.log(account);
          if (err) {
            console.log(err);
            throw err;
          }

          let transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
              user: account.user,
              pass: account.pass,
            },
          });
          var query = await Book.findOne({
            where: { id: body.book },
          });
          if (!query) {
            foundedOrNot(res, query);
          }
          var fullUrl =
            req.protocol + "://" + req.get("host") + `/${query.url}`;
          console.log(fullUrl);

          let info = await transporter.sendMail({
            from: account.user,
            to: body.to,
            subject: body.subject,
            text: body.text,
            attachments: [
              {
                filename: query.url,
                path: fullUrl,
              },
            ],
          });
          res.send(nodemailer.getTestMessageUrl(info));
        }
      );
    }
  });
};
