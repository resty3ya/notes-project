import { Router } from "express";
const router = Router();

import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote,
} from "../controllers/noteController.js";

// // Get all notes
// router.get("/api/notes", getAllNotes);

// // Create note
// router.post("/api/notes", createNote);

// // Update Note
// router.patch("/api/notes/:id", updateNote);

// // Delete Note
// router.delete("/api/notes/:id", deleteNote);

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

export default router;
