import { Router } from "express";
import { getJob } from "@repo/job-store";

const router = Router();

router.get("/:jobId", async (req, res) => {

  const jobId = req.params.jobId;

  const job = await getJob(jobId);
  if (!job) {
    return res.status(404).json({
      error: "Job not found"
    });
  }

  res.json(job);

});

export default router;