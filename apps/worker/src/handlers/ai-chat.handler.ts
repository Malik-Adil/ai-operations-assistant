import { generateAIResponse } from "packages/ai/ai-service";

export async function handleAIChatJob(job: any) {

  const { message } = job.data;

  console.log("AI job received:", message);

  const result = await generateAIResponse(message);

  console.log("AI result:", result.reply);

}