const express = require("express");
const { config } = require("./config");
const { routes } = require("./routes");
const path = require("path");
const sequelize = require("./database/sequelize");
const { ResponseTemp, generalHandler } = require("./utils/utils");
const multer = require("multer");

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
