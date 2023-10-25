import Note from "../models/Note.js";
import { StatusCodes } from "http-status-codes";
// import mongoose from "mongoose";

// import { nanoid } from "nanoid";

// let notes = [
//   { id: nanoid(), title: "Buy Milk", text: "Buy 2 bottles of milk" },
//   { id: nanoid(), title: "Buy Egg", text: "Buy 1 dozen of eggs" },
// ];

// GET ALL NOTES
export const getAllNotes = async (req, res) => {
  const { user, text, title } = req.query;

  //POPULATE IS USED TO GET THE USER DATA TOGETHER WITH NOTES FROM THE USER MODEL EVEN IN THE CLIENT
  const notes = await Note.find(req.query).populate("user");

  res.status(StatusCodes.OK).json({ notes });
};

// CREATE NOTE
export const createNote = async (req, res) => {
  const { user, title, text } = req.body;

  // if (!title || !text) {
  //   return res.status(400).json({ message: "please provide title and a text" });
  // }
  // const id = nanoid(10);
  // const note = { id, title, text };
  // notes.push(note);

  const note = await Note.create({ user, title, text });

  res.status(StatusCodes.CREATED).json({ message: "notes created", note });
};

// GET NOTE
export const getNote = async (req, res) => {
  // ADDING POPULATE GIVE THE VALUE WHICH IS THE USERNAME OF USER UNDER NOTES
  const note = await Note.findById(req.params.id);
  res.status(StatusCodes.OK).json({ note });
};

// UPDATE NOTE
export const updateNote = async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // const { title, text } = req.body;
  // if (!title || !text) {
  //   return res.status(400).json({ message: "please provide title and a text" });
  // }

  // const { id } = req.params;
  // const note = notes.find((note) => note.id === id);

  // if (!note) throw new Error(`no note with this id ${id}`);

  // note.title = title;
  // note.text = text;

  res
    .status(StatusCodes.OK)
    .json({ message: "note modified", note: updatedNote });
};

// DELETE NOTE
export const deleteNote = async (req, res) => {
  const removedNote = await Note.findByIdAndDelete(req.params.id);

  // const { id } = req.params;

  // try {
  //   const note = notes.find((note) => note.id === id);

  //   if (!note) {
  //     return res
  //       .status(404)
  //       .json({ message: `no job with this id ${id}`, note });
  //   }

  //   console.log(note);
  // } catch (error) {
  //   console.log(error);
  // }

  // const newNotes = notes.filter((note) => note.id !== id);
  // notes = newNotes;

  res.status(StatusCodes.OK).json({ message: "note deleted" });
};
