import { Router } from "express";
import { addSupportTicketAnalysisJob } from "@queue/queues";

const router = Router();

router.post("/", async (req, res) => {

  const { ticketId, message, customerEmail } = req.body;

  const job = await addSupportTicketAnalysisJob({
    ticketId,
    message,
    customerEmail
  });

  res.json({
    status: "queued",
    jobId: job.id
  });

});

export default router;