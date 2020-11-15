import { sql } from "../../../config/db";
import { v4 } from "uuid";
import { User } from "./template";
import { ConnectionPool } from "mssql";
import { ErrorConnectionPool } from "../../../helpers/error-handling";

async function createUser({ ...args }: User) {
  const { username = "", email = "" } = { ...args };
  const uuid = v4();
  sql
    .then((conn: ConnectionPool) =>
      conn
        .query(
          `INSERT INTO customer (id, username, email)
               values ('${uuid}','${username}','${email}')`
        )
        .then((e) =>
          e.rowsAffected.length > 0
            ? console.info("Registrado com sucesso")
            : console.error("Falha ao inserir registro")
        )
    )
    .catch((err) => console.error(new ErrorConnectionPool(err)));
  return args;
}

export = createUser;
