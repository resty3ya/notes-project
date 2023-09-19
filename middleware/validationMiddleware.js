import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
} from "../errors/customErrors.js";
import Note from "../models/Note.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import { NOTE_STATUS } from "../utils/constant.js";

const validationMiddleware = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

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

// THIS IS FOR NOTE INPUT
export const validateNoteInput = validationMiddleware([
  body("user").notEmpty().withMessage("user is required"),
  body("title").notEmpty().withMessage("title is required"),
  body("text").notEmpty().withMessage("description is required"),
  body("noteStatus")
    .isIn(Object.values(NOTE_STATUS))
    .withMessage("invalid status value"),
]);

// VALIDATE NOTE ID
export const validateIdParam = validationMiddleware([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDb Id");

    const note = await Note.findById(value);

    if (!note) throw new NotFoundError(`no note with id ${value}`);
  }),
]);

// INPUT USER VALIDATION
export const validateUserInput = validationMiddleware([
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new BadRequestError("username already exists");
      }
    }),
  body("firstName").notEmpty().withMessage("first name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

// VALIDATE UPDATE USER
export const validateUpdateUserInput = validationMiddleware([
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .custom(async (username, { req }) => {
      const user = await User.findOne({ username });
      console.log({ req });
      if (user && user._id.toString() !== req.id) {
        throw new BadRequestError("username already exists");
      }
      console.log(req.id);
    }),
  body("firstName").notEmpty().withMessage("first name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);

export default validationMiddleware;
