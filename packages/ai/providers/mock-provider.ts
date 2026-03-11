/**
FILE
mock-provider.ts

WHY IT EXISTS
Provides a mock AI implementation used during development
before integrating a real LLM provider.

ARCHITECTURE EXPLANATION
Implements the AIProvider interface so it can be swapped
later with Claude or OpenAI without changing application code.

FUTURE USAGE
- local development without LLM cost
- testing AI workflows
*/

import { AIProvider } from "./ai-provider";

export class MockProvider implements AIProvider {

  async generate(prompt: string): Promise<string> {

    console.log("Mock AI Provider called");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return JSON.stringify({
      category: "integration_issue",
      priority: "medium",
      responseDraft:
        "Please verify your Shopify API credentials."
    });

  }

}