const dotenv = require("dotenv");

dotenv.config();

exports.config = {
  username: `${process.env.MYSQL_USERNAME}`,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  db_port: Number(process.env.PORT),
  server_port: process.env.SERVER_PORT,
  db_host: process.env.MYSQL_HOST,
  dialect: process.env.DIALECT,
  url: process.env.URL,
  jwt: { secret: "secret" },
};
