import { Router } from "express";
import { addSupportTicketAnalysisJob } from "@queue/queues";
import { createJob } from "@repo/job-store";

const router = Router();

router.post("/", async (req, res) => {

  const { ticketId, message, customerEmail } = req.body;

  const job = await addSupportTicketAnalysisJob({
    ticketId,
    message,
    customerEmail
  });

  await createJob(job.id);


  res.json({
    status: "queued",
    jobId: job.id
  });

});

export default router;