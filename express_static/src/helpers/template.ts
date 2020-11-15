import { ConnectionError } from "mssql";
import { RequestError, ConnectionError as TediousError } from "tedious";

export enum Log {
  INFO,
  WARN,
  ERROR,
  ALL,
}

type ErrorConnection = {
  log?: Log;
} & ConnectionError &
  RequestError &
  TediousError &
  Error;

export interface ErrorConnectionPoolException extends ErrorConnection {}
