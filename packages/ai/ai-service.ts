import { getAIProvider } from "./providers/provider-factory";
import { supportTicketPrompt } from "./prompts/support-ticket.prompt";

  export async function analyzeSupportTicket(message: string) {

    console.log("AI analyzing support ticket...");
    const provider = getAIProvider();

    const prompt = `
    ${supportTicketPrompt}
    
    Customer message:
    ${message}
    `;
   

    const response = await provider.generate(prompt);
    
    return JSON.parse(response);
  
  }