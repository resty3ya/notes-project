import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  firstName: {
    type: String,
    default: "firstName",
  },
  lastName: {
    type: String,
    default: "lastName",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("User", UserSchema);
