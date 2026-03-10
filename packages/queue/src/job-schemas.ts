import { z } from "zod";

export const testJobSchema = z.object({
  message: z.string(),
  createdAt: z.string(),
});


export const supportTicketAnalysisJobSchema = z.object({
  ticketId: z.string(),
  message: z.string(),
  customerEmail: z.string(),
  createdAt: z.string(),
})


export type TestJobPayload = z.infer<typeof testJobSchema>;
export type SupportTicketAnalysisJobPayload = z.infer<typeof supportTicketAnalysisJobSchema>;