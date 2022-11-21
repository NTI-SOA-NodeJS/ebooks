const express = require("express");
const { config } = require("./config");
const { routes } = require("./routes");
const path = require("path");
const sequelize = require("./database/sequelize");
const { ResponseTemp, generalHandler } = require("./utils/utils");
const multer = require("multer");
const session = require("express-session");
const passport = require("passport");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/books/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "assets/books/" });

const PORT = config.server_port;
const app = express();
(async () => {
  try {
    // await sequelize.sync({ force: true, alter: true });
    await sequelize.authenticate({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error(error);
  }
})();

app.use(express.json());
app.use("/path", express.static("assets/books"));
app.use("/api", routes);

//auth ---------------------------------------------
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//       passReqToCallback: true,
//     },
//     authUser
//   )
// );
// passport.serializeUser((user, done) => {
//   done(null, user);

//   // The "user" is the authenticated user object, that is passed from the authUser() function in "Google Strategy".
//   // This "user" object is attached to
//   //"req.session.passport.user.{user}"
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
// app.get(
//   "/auth/google/callback",
//   // (req, res, next) => {
//   //   console.log("hello");
//   //   res.send("hello");
//   // },
//   passport.authenticate("google", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/login",
//     //console.log("")
//   })
// );
//----------------------------------------
app.get("/", (req, res) => {
  res.json({ state: "OK" });
});
app.post("/upload", (req, res) => {
  generalHandler(res, async () => {
    var up = upload.single("uploaded_file");

    await up(req, res, function (err) {
      if (err) throw err;
      res.json({ path: `path/${req.file.originalname}` });
    });
  });
});
app.get("*", function (req, res) {
  ResponseTemp(res, 404);
});
app.post("*", function (req, res) {
  ResponseTemp(res, 404);
});
app.put("*", function (req, res) {
  ResponseTemp(res, 404);
});
app.delete("*", function (req, res) {
  ResponseTemp(res, 404);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
