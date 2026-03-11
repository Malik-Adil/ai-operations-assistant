import { z } from "zod";

export const supportTicketAIResponseSchema = z.object({
  category: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  responseDraft: z.string()
});

export type SupportTicketAIResponse =
  z.infer<typeof supportTicketAIResponseSchema>;