import mongoose from "mongoose";
import { NOTE_STATUS } from "../utils/constant.js";

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    noteStatus: {
      type: String,
      enum: Object.values(NOTE_STATUS),
      default: NOTE_STATUS.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
