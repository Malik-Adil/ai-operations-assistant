/**
FILE
provider-factory.ts

WHY IT EXISTS
Creates and returns the correct AI provider implementation.
This enables switching between providers via configuration.

ARCHITECTURE EXPLANATION
The AI service requests a provider from the factory instead
of directly creating provider instances.

FUTURE USAGE
- environment based provider selection
- multi-model routing
*/

import { AIProvider } from "./ai-provider";
import { MockProvider } from "./mock-provider";
import { ClaudeProvider } from "./claude-provider";


export function getAIProvider(): AIProvider {

  console.log("ENV AI_PROVIDER =", process.env.AI_PROVIDER);
  console.log("ENV FILE PATH =", process.cwd());
  // later we will read this from environment config
  const provider = process.env.AI_PROVIDER || "mock";
  
  
  switch (provider) {

    case "claude":
      return new ClaudeProvider();

    case "mock":
    default:
      return new MockProvider();

  }

}