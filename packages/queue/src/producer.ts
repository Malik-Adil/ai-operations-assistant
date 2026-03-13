import { Queue } from "bullmq";
import {  connection } from "./redis";
import { JobType } from "./job-types";

export const aiQueue = new Queue("ai-jobs", {
  connection,
});

export async function addJob(type: JobType, payload: any) {
  return aiQueue.add(type, payload,{
    attempts: 1,
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

export async function addSupportTicketAnalysisJob(payload:{ticketId: string, message: string, customerEmail: string}) {
  return addJob(JobType.SUPPORT_TICKET_ANALYSIS, {
  ...payload,
    createdAt: new Date().toISOString(),
  });
}