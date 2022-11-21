const { text } = require("express");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { Op } = require("sequelize");

const { Book, Email } = require("../../models/index");
const { postEmailSchema } = require("../../schemas/post_email_schema");
const {
  generalHandler,
  handleSchema,
  foundedOrNot,
  ResponseTemp,
} = require("../../utils/utils");
exports.sendEmail = async (req, res) => {
  generalHandler(res, async () => {
    var body = req.body;
    const confirm = handleSchema(postEmailSchema, body);
    if (confirm) {
      const transport = nodemailer.createTransport(
        sendGridTransport({
          auth: {
            api_key:
              "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",
          },
        })
      );
      // get emails ----------------
      const emails = [];
      const emailsObj = await Email.findAll({
        where: {
          UserId: { [Op.in]: body.to },
        },
      });
      emailsObj.forEach((element) => {
        emails.push(element.email);
      });
      //-----------------------------
      // get emails ----------------
      const attachments = [];

      const books = await Book.findAll({
        where: {
          id: { [Op.in]: body.booksIds },
        },
      });
      books.forEach((element) => {
        var fullUrl =
          req.protocol + "://" + req.get("host") + `/${element.url}`;
        attachments.push({
          filename: element.url,
          path: fullUrl,
        });
      });
      //----------------
      let mailOpts = {
        from: "mn297688@gmail.com",
        to: emails.join(", "),
        subject: body.subject,
        text: body.text,
        attachments: attachments,
      };

      await transport.sendMail(mailOpts, function (err, response) {
        if (err) {
          generalHandler(res, () => {
            throw err;
          });
        }
        ResponseTemp(res, 200, response);
      });
    }
  });
};
// exports.sendEmail = async (req, res) => {
//   generalHandler(res, async () => {
//     var body = req.body;

//     const confirm = handleSchema(postEmailSchema, body);
//     if (confirm) {
//       let testAccount = await nodemailer.createTestAccount(
//         async (err, account) => {
//           console.log(account);
//           if (err) {
//             console.log(err);
//             throw err;
//           }

//           let transporter = nodemailer.createTransport({
//             host: account.smtp.host,
//             port: account.smtp.port,
//             secure: account.smtp.secure,
//             auth: {
//               user: account.user,
//               pass: account.pass,
//             },
//           });
//           var query = await Book.findOne({
//             where: { id: body.book },
//           });
//           if (!query) {
//             foundedOrNot(res, query);
//           }
//           var fullUrl =
//             req.protocol + "://" + req.get("host") + `/${query.url}`;
//           console.log(fullUrl);

//           let info = await transporter.sendMail({
//             from: account.user,
//             to: body.to,
//             subject: body.subject,
//             text: body.text,
//             attachments: [
//               {
//                 filename: query.url,
//                 path: fullUrl,
//               },
//             ],
//           });
//           res.send(nodemailer.getTestMessageUrl(info));
//         }
//       );
//     }
//   });
// };

// const con = require("./src/config");
// const bcrypt = require("bcryptjs");
// const uuid = require("uuid");
// // const nodemailer = require("nodemailer");
// // const sendGridTransport = require("nodemailer-sendgrid-transport");

// let mailOpts, transporter;
// mailOpts = {
//   from: "mn297688@gmail.com",
//   to:
//     req.body.First_Name +
//     " " +
//     req.body.Last_Name +
//     " &lt;" +
//     req.body.SendGrid_Email +
//     "&gt;",
//   subject: "EbooK",
//   text: "you seccessfully signed up",
// };
// transporter.sendMail(mailOpts, function (err, res) {
//   if (err) {
//     res.render("contact-failure");
//   } else {
//     res.render("contact-success");
//   }
// });
