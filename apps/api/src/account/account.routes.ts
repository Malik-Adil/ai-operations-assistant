import { Router } from "express";
import { deleteAccountHandler } from "./account.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.delete(
  "/delete",
  authMiddleware,
  deleteAccountHandler
);

export default router;