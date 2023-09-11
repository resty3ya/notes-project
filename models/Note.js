import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
