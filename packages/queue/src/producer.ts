import { Queue } from "bullmq";
import {  connection } from "./redis";
import { JobType } from "./job-types";

export const aiQueue = new Queue("ai-jobs", {
  connection,
});

export async function addJob(type: JobType, payload: any) {
  return aiQueue.add(type, payload,{
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000,
    },
    removeOnComplete: true,
    removeOnFail: false,
  });
}

export async function addTestJob(message: string) {
  return addJob(JobType.TEST, {
    message,
    createdAt: new Date().toISOString(),
  });
}

export async function addAIChatJob(message: string) {
  return addJob(JobType.AI_CHAT, {
    message,
    createdAt: new Date().toISOString(),
  });
}