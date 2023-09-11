import Note from "../models/Note.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

// import { nanoid } from "nanoid";

// let notes = [
//   { id: nanoid(), title: "Buy Milk", text: "Buy 2 bottles of milk" },
//   { id: nanoid(), title: "Buy Egg", text: "Buy 1 dozen of eggs" },
// ];

// GET ALL NOTES
export const getAllNotes = async (req, res) => {
  res.status(200).json({ notes });
};

// CREATE NOTE
export const createNote = async (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ message: "please provide title and a text" });
  }
  const id = nanoid(10);
  const note = { id, title, text };
  notes.push(note);
  res.status(200).json({ note });
};

// UPDATE NOTE
export const updateNote = async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    return res.status(400).json({ message: "please provide title and a text" });
  }

  const { id } = req.params;
  const note = notes.find((note) => note.id === id);

  if (!note) throw new Error(`no note with this id ${id}`);

  note.title = title;
  note.text = text;

  res.status(200).json({ message: "note modified", note });
};

// DELETE NOTE
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = notes.find((note) => note.id === id);

    if (!note) {
      return res
        .status(404)
        .json({ message: `no job with this id ${id}`, note });
    }

    console.log(note);
  } catch (error) {
    console.log(error);
  }

  const newNotes = notes.filter((note) => note.id !== id);
  notes = newNotes;

  res.status(200).json({ message: "note deleted" });
};
