import { StatusCodes } from "http-status-codes";

//THIS IS 404 ERROR
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

// THIS IS 400 ERROR
export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

// THIS IS 401 ERROR
export class UnAuthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

// THIS IS 403 ERROR
export class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
