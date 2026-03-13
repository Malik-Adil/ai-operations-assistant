import Anthropic from "@anthropic-ai/sdk"
import { AIProvider } from "./ai-provider"
import { toolRegistry } from "../tools/tool-registry"

export class ClaudeProvider implements AIProvider {

  private client: Anthropic

  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    })
  }

  async generate(prompt: string, options?: { tools?: boolean }): Promise<any> {


    const request: any = {
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      messages: [
        { role: "user", content: prompt }
      ]
    };


    if (options?.tools) {
      request.tools = toolRegistry.list().map(tool => ({
        name: tool.name,
        description: tool.description,
        input_schema: tool.inputSchema
      }));
    }

    const response = await this.client.messages.create(request);



    
    const content = response.content

    // detect tool use
    const toolUse = content.find((item) => item.type === "tool_use")

    if (toolUse && toolUse.type === "tool_use") {
      return {
        type: "tool_use",
        name: toolUse.name,
        input: toolUse.input
      }
    }

    // fallback text response
    const textBlock = content.find((item) => item.type === "text")

    return {
      type: "text",
      content: textBlock && textBlock.type === "text" ? textBlock.text : ""
    }
  }
}