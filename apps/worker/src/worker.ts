import { Worker } from "bullmq";
import { connection } from "@queue/queues";
import { routeJob } from "./router";


const worker = new Worker(
  "ai-jobs",
  async (job) => {
    console.log(`Processing job: ${job.name}`);
    console.log("Job data:", job.data);
    
    await routeJob(job);
  },
  { connection: connection as any }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed`);
  console.error("Reason:", err.message);
});

worker.on("active", (job) => {
  console.log(`Job ${job.id} started`);
});

worker.on("stalled", (jobId) => {
  console.warn(`Job ${jobId} stalled`);
});