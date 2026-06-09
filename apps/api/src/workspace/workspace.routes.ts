import { Router } from "express";
import { createWorkspaceHandler } from "./workspace.controller";

const router = Router();

router.post("/create", createWorkspaceHandler);

export default router;