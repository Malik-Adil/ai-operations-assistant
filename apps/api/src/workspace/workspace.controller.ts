import { Request, Response } from "express";
import { createWorkspace } from "./workspace.service";

export function createWorkspaceHandler(req: Request, res: Response) {
  const workspace = createWorkspace(req.body);

  res.json({
    status: "success",
    workspace,
  });
}