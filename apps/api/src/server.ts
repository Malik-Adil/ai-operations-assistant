import dotenv from "dotenv";
dotenv.config({path: "../../.env"});

import express, { Request, Response } from "express";
import { setupBullBoard } from "./bullboard";
import aiRoutes from "./routes/ai";
import supportTicketRoutes from "./routes/support";
import jobsResultRoutes from "./routes/jobs-result";

const app = express();

app.use(express.json());
setupBullBoard(app);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});


app.use("/ai", aiRoutes);
app.use("/support-ticket", supportTicketRoutes);
app.use("/jobs", jobsResultRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});