import express, { Request, Response } from "express";
import { addTestJob } from "@queue/queues";
import { setupBullBoard } from "./bullboard";
import aiRoutes from "./routes/ai";
import supportTicketRoutes from "./routes/support";

const app = express();

app.use(express.json());
setupBullBoard(app);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});


app.use("/ai", aiRoutes);
app.use("/support-ticket", supportTicketRoutes);

app.post("/jobs/test", async (req: Request, res: Response) => {
  const { message } = req.body;

  const jobId = await addTestJob(message);

  res.json({
    status: "job added",
    jobId
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});