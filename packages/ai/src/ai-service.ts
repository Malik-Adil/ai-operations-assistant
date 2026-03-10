export async function generateAIResponse(message: string) {

    console.log("AI Service received message:", message);
  
    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      reply: `AI response to: ${message}`,
    };
  }