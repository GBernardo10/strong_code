import { ErrorConnectionPoolException, Log } from "./template";

export class ErrorConnectionPool
  extends Error
  implements ErrorConnectionPoolException {
  constructor(args: ErrorConnectionPoolException) {
    super(args.name);
    this.name = args.name || "ErrorConnectionPool";
    this.code = args.code ?? undefined;
    this.message = "mes";
    this.log = Log.ERROR;
    this.stack = args.stack ?? undefined;
  }
  log?: Log;
  name: string;
  message: string;
  code: string;
  stack?: string | undefined;
}
