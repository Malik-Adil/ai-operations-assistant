import { Router } from "express";
import { addAIChatJob } from "@queue/queues";

const router = Router();

router.post("/chat", async (req, res) => {

  const { message } = req.body;

  const job = await addAIChatJob(message);

  res.json({
    status: "queued",
    jobId: job.id,
  });

});

export default router;