import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
} from "../errors/customErrors";
