import dotenv from "dotenv";
dotenv.config({path: "../../.env"});

import { Worker } from "bullmq";
import { connection } from "@queue/queues";
import { routeJob } from "./router";
import { startJob, completeJob, failJob } from "@repo/job-store";

const worker = new Worker(
  "ai-jobs",
  async (job) => {
    startJob(job.id);
    console.log(`Processing job: ${job.name}`);
    console.log("Job data:", job.data);
    
    return await routeJob(job);
  },
  { connection: connection as any }
);



worker.on("completed", async (job, result) => {
  await completeJob(job.id, result);
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", async (job, err) => {
  await failJob(job.id, err.message);
  console.error(`Job ${job?.id} failed`);
  console.error("Reason:", err.message);
});

worker.on("active", (job) => {
  console.log(`Job ${job.id} started`);
});

worker.on("stalled", (jobId) => {
  console.warn(`Job ${jobId} stalled`);
});