import {
    analyzeSupportTicket,
    supportTicketAIResponseSchema
  } from "@ai/index";
  
  export async function handleSupportTicketJob(job: any) {
  
    const { ticketId, message } = job.data;
  
    console.log("Analyzing support ticket:", ticketId);
  
    const aiResult = await analyzeSupportTicket(message);
  
    const parsed = supportTicketAIResponseSchema.safeParse(aiResult);
  
    if (!parsed.success) {
      throw new Error("Invalid AI response format");
    }
  
    const result = parsed.data;
  
    console.log("AI structured result:", result);
  
  }