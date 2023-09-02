import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

let notes = [
  { id: nanoid(), title: "Buy Milk", text: "Buy 2 bottles of milk" },
  { id: nanoid(), title: "Buy Egg", text: "Buy 1 dozen of eggs" },
];

const PORT = process.env.PORT || 3500;

// middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send("Hello World"));

app.post("/", (req, res) => {
  res.json({ msg: "data received", data: req.body });
});

// GET ALL JOBS
app.get("/api/notes", (req, res) => {
  res.status(200).json({ notes });
});

// CREATE JOB
app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ message: "please provide title and a text" });
  }
  const id = nanoid(10);
  const note = { id, title, text };
  notes.push(note);
  res.status(200).json({ note });
});

// EDIT JOB

// DELETE JOB

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
