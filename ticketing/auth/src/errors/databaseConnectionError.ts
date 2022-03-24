export class DatabaseConnectionError extends Error {
  reason = "Error connection to Database";

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
