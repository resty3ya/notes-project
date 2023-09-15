import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
} from "../errors/customErrors";
import Note from "../models/Note.js";
import mongoose from "mongoose";

const validationMiddleware = () => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.message);

        if (errorMessages[0].startsWith("no note")) {
          throw new NotFoundError(errorMessages);
        }
        // if (errorMessages[0].startsWith("not authorized")) {
        //   throw new UnAuthorizedError("not authorized to access this route");
        // }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// THIS IS FOR CREATE NOTE
export const validateNoteInput = validationMiddleware([
  body("title").notEmpty().withMessage("title is required"),
  body("text").notEmpty().withMessage("description is required"),
]);

// VALIDATE NOTE ID
export const validateIdParam = validationMiddleware([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDb Id");

    const note = await Note.findById(value);

    if (!note) throw new NotFoundError(`no job with id ${value}`);
  }),
]);

export default validationMiddleware;
