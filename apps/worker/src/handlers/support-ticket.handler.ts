import {
    analyzeSupportTicket,
    supportTicketAIResponseSchema
  } from "packages/ai/index";
  import { createRulesEngine } from "@ai/automation/rules/rules-registry"
  import { createExecutionContext } from "@ai/execution/execution-context"
  
  export async function handleSupportTicketJob(job: any) {
    
    const rulesEngine = createRulesEngine<any>()
    const context = createExecutionContext()
  
    const { ticketId, message } = job.data;
  
    console.log("Analyzing support ticket:", ticketId);
  
    const aiResult = await analyzeSupportTicket(message);
    
    const parsed = supportTicketAIResponseSchema.safeParse(aiResult);
  
    if (!parsed.success) {
      throw new Error("Invalid AI response format");
    }
  
    
    const result = parsed.data;
    console.log("AI structured result:", result);

    // Calling Rules Engine to evaluate the result
    await rulesEngine.evaluate(result, context);

    return {
      ticketId,
      message,
      aiResult: result,
      actions: context.actions
    }
  
  }