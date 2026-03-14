import { getAIProvider } from "./providers/provider-factory";
import { supportTicketPrompt } from "./prompts/support-ticket.prompt";
import { agentRunner } from "./agent-runner";

export async function analyzeSupportTicket(message: string) {

  console.log("AI analyzing support ticket...");
  const provider = getAIProvider();

  const prompt = `
    ${supportTicketPrompt}
    
    Customer message:
    ${message}
    `;


  const response = await provider.generate(prompt, { tools: true });

  let text = response.content;
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  return JSON.parse(text);

}

export class AIService {

  async runAgent(prompt: string) {
    return agentRunner.run(prompt)
  }

}

export const aiService = new AIService()