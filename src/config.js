const dotenv = require("dotenv");

dotenv.config();

exports.config = {
  username: `${process.env.MYSQL_USERNAME}`,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  db_port: Number(process.env.PORT),
  server_port: process.env.SERVER_PORT,
  db_host: process.env.MYSQL_HOST,
  dialect: process.env.DIALECT,
  url: process.env.URL,
  jwt: process.env.SECERT_TOKEN,
  rounds: process.env.SALT_ROUNDS,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
};
