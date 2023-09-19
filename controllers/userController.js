import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  const { username, firstName, lastName, active } = req.query;

  const user = await User.find(req.query);

  res.status(StatusCodes.OK).json({ user });
};

// CREATE USER
export const createUser = async (req, res) => {
  const { username, firstName, lastName } = req.body;

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ message: "user created", user });
};

// GET USER
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(StatusCodes.OK).json({ user });
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ message: "user modified", user: updatedUser });
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const removedUser = await User.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ message: "user deleted" });
};
