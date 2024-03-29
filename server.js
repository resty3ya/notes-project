import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const PORT = process.env.PORT || 3500;

// routes
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send("Hello World"));

// app.post("/", (req, res) => {
//   res.json({ msg: "data received", data: req.body });
// });
// middleware

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
