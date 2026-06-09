import 'dotenv/config'

import express, { Request, Response } from "express";

import passport from "passport";
import cookieParser from "cookie-parser";

import { setupBullBoard } from "./bullboard";
import aiRoutes from "./routes/ai";
import supportTicketRoutes from "./routes/support";
import jobsResultRoutes from "./routes/jobs-result";
import authRoutes from "./auth/auth.routes";
import workspaceRoutes from "./workspace/workspace.routes";
import accountRoutes from "./account/account.routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

setupBullBoard(app);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});


app.use("/auth", authRoutes);
app.use("/workspace", workspaceRoutes);
app.use("/account", accountRoutes);
app.use("/ai", aiRoutes);
app.use("/support-ticket", supportTicketRoutes);
app.use("/jobs", jobsResultRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});