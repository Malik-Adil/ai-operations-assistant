import { Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null
});

console.log("Worker started and waiting for jobs...");

const worker = new Worker(
  "ai-jobs",
  async (job) => {
    console.log(`Processing job: ${job.name}`);
    console.log("Job data:", job.data);

    if (job.name === "test-job") {
      const { message } = job.data;

      console.log("Worker received message:", message);

      return {
        processed: true,
        response: `Processed message: ${message}`
      };
    }

    return { status: "unknown job type" };
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed`, err);
});