import { JobType } from "@queue/job-types";
import {
  handleAIChatJob,
  handleTestJob,
  handleSupportTicketJob
} from "./handlers";

export async function routeJob(job: any) {

  switch (job.name) {

    case JobType.TEST:
      return handleTestJob(job);

    case JobType.AI_CHAT:
      return handleAIChatJob(job);

    case JobType.SUPPORT_TICKET_ANALYSIS:
      return await handleSupportTicketJob(job);

    default:
      console.warn("Unknown job type:", job.name);

  }

}