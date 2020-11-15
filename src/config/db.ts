import { config, ConnectionPool } from "mssql";
import { config as dotenv } from "dotenv/";
import { ErrorConnectionPool } from "../helpers/error-handling";

dotenv();

const _configuration: config = {
  server: String(process.env.HOST),
  user: String(process.env.USER),
  port: Number(process.env.DB_PORT),
  database: String(process.env.DATABASE),
  password: String(process.env.PASSWORD),
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

const sql = new ConnectionPool(_configuration)
  .connect()
  .then((result: ConnectionPool) => {
    if (!result) {
      console.error(new ErrorConnectionPool(result));
    }
    return result;
  })
  .catch((err) => {
    console.error(new ErrorConnectionPool(err));
    return err;
  });

export { sql };
