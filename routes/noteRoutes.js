import { Router } from "express";
const router = Router();
import {
  validateNoteInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
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

router.route("/").get(getAllNotes).post(validateNoteInput, createNote);

router
  .route("/:id")
  .get(validateIdParam, getNote)
  .patch(validateNoteInput, validateIdParam, updateNote)
  .delete(deleteNote);

export default router;
