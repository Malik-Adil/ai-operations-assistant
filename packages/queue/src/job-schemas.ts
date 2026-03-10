import { z } from "zod";

export const testJobSchema = z.object({
  message: z.string(),
  createdAt: z.string(),
});

export type TestJobPayload = z.infer<typeof testJobSchema>;