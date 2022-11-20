const express = require("express");
const { config } = require("./config");
const { routes } = require("./routes");

const sequelize = require("./database/sequelize");
const { ResponseTemp } = require("./utils/utils");

const PORT = config.server_port;
const app = express();

(async () => {
  try {
    // await sequelize.sync({ force: false,  alter:true});
    await sequelize.authenticate({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database");
  }
})();

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ state: "OK" });
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
