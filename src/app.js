const express = require("express");
const { config } = require("./config");
const { routes } = require("./routes");

const { where, Op } = require("sequelize");
const { sequelize } = require("./database/sequelize");

const PORT = config.server_port;

(async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const app = express();
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ state: "OK" });
});
// app.post("/post", (req, res) => {
//   const data = req.body.data;
//   const newUser = {
//     name: data.name,
//   };
//   Author.create(newUser);
//   res.json(newUser);
// });

// app.get("/findAll", async (req, res) => {
//   const term = req.query.term;
//   if (term) {
//     const filteredAuthors = await Author.findAll({
//       where: {
//         name: {
//           [Op.like]: `${term}%`,
//         },
//       },
//     });
//     res.json(filteredAuthors);
//   } else {
//     const all = await Author.findAll();
//     res.json(all);
//   }
// });

// app.get('/authors/:id', (req, res) => {

// })

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
