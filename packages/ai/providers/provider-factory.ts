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

export function getAIProvider(): AIProvider {

  // later we will read this from environment config
  const provider = "mock";

  switch (provider) {

    case "mock":
    default:
      return new MockProvider();

  }

}