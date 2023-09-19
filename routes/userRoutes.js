import { Router } from "express";
const router = Router();
import {
  validateUserInput,
  validateUpdateUserInput,
} from "../middleware/validationMiddleware.js";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

router.route("/").get(getAllUsers).post(validateUserInput, createUser);
router
  .route("/:id")
  .get(getUser)
  .patch(validateUpdateUserInput, updateUser)
  .delete(deleteUser);

export default router;
