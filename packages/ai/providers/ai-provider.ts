/**
FILE
ai-provider.ts

WHY IT EXISTS
Defines a common interface that all AI providers must implement.
This allows the platform to support multiple LLM providers such as
Claude, OpenAI, or local models without changing business logic.

ARCHITECTURE EXPLANATION
The AI service never calls a provider directly. Instead it depends
on this interface. Concrete providers implement this interface.

Handler
↓
AI Service
↓
AI Provider Interface
↓
Claude / OpenAI / Mock Provider

FUTURE USAGE
- Claude provider implementation
- OpenAI provider implementation
- local model support
- streaming responses
*/

export interface AIProvider {
    generate(prompt: string): Promise<string>;
  }