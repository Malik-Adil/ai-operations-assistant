import { Worker } from "bullmq";
import { connection, JobType, testJobSchema } from "@queue/queues";
import { generateAIResponse } from "@ai/ai-service";


const worker = new Worker(
  "ai-jobs",
  async (job) => {
    console.log(`Processing job: ${job.name}`);
    console.log("Job data:", job.data);

    switch (job.name) {
      case JobType.TEST:
        await handleTestJob(job.data);
        break;

      case JobType.AI_CHAT:
        await handleAIChatJob(job.data);
        break;

      case JobType.SUPPORT_TICKET_ANALYSIS:
        await handleSupportTicket(job);
        break;

      default:
        console.warn("Unknown job type:", job.name);
    }
  },
  { connection: connection as any }
);


async function handleAIChatJob(data: any) {

  const { message } = data;

  console.log("AI job received:", message);

  const result = await generateAIResponse(message);

  console.log("AI result:", result.reply);

}

async function handleTestJob(data: any) {
  const parsed = testJobSchema.safeParse(data);
  if (!parsed.success) {
    console.error("Invalid job data:", parsed.error);
    throw new Error("Invalid job data");
  }
  const payload = parsed.data;
  console.log("Worker received message:", payload.message);

  if (payload.message === "fail") {
    throw new Error("Simulated failure");
  }
}

async function handleSupportTicket(job: any) {

  const { message, ticketId } = job.data;

  console.log("Analyzing support ticket:", ticketId);

  const result = await generateAIResponse(
    `Analyze this support request and classify it: ${message}`
  );

  console.log("AI analysis:", result.reply);

}

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