const express = require("express");
const { config } = require("./config");
const { sequelize } = require("./db/database");
const { routes } = require("./routes");

const PORT = config.server_port;
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();
app.use(express.json());
app.use('/api', routes)

app.get("/", (req, res) => {
  res.json({ state: "OK" });
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
