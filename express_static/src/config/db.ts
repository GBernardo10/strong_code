import { config, ConnectionPool } from "mssql";
import { config as dotenv } from "dotenv/";

dotenv();

const _configuration: config = {
  server: String(process.env.HOST),
  user: String(process.env.USER),
  port: Number(process.env.PORT),
  database: String(process.env.DATABASE),
  password: String(process.env.PASSWORD),
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

const sql = new ConnectionPool(_configuration)
  .connect()
  .then((result) => result);

export { sql };