import { supportTicketPrompt } from "./prompts/support-ticket.prompt";

export async function generateAIResponse(message: string) {

    console.log("AI Service received message:", message);
  
    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      reply: `AI response to: ${message}`,
    };
  }

  export async function analyzeSupportTicket(message: string) {

    console.log("AI analyzing support ticket...");
    console.log("Prompt used:", supportTicketPrompt);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      category: "integration_issue",
      priority: "medium",
      responseDraft:
        "Please ensure your Shopify API credentials are correct and try reconnecting."
    };
  
  }