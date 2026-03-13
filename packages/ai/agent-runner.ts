import { getAIProvider } from "./providers/provider-factory"
import { toolExecutor } from "./tool-executor"

export class AgentRunner {

  async run(prompt: string) {

    const provider = getAIProvider()

    const messages: any[] = [
      {
        role: "user",
        content: prompt
      }
    ]

    while (true) {

      const result = await provider.generate(messages)

      // Claude wants to use a tool
      if (result.type === "tool_use") {

        const toolResult = await toolExecutor.execute(
          result.name,
          result.input
        )

        messages.push({
          role: "assistant",
          content: [
            {
              type: "tool_use",
              name: result.name,
              input: result.input
            }
          ]
        })

        messages.push({
          role: "user",
          content: [
            {
              type: "tool_result",
              tool_use_id: result.name,
              content: JSON.stringify(toolResult)
            }
          ]
        })

        continue
      }

      return result
    }
  }

}

export const agentRunner = new AgentRunner()