const express = require("express");
const { config } = require("./config");
const {sequelize, Author} = require("./db/sequelize");
const { routes } = require("./routes");
const _authors = require('../seeds/authors.json')

const PORT = config.server_port;

try {
  sequelize.sync()
 // Author.bulkCreate(_authors)
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
const app = express();
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ state: "OK" });
});
app.post('/post', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
