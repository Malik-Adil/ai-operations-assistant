import { toolRegistry } from "./tools/tool-registry"

export class ToolExecutor {
  async execute(toolName: string, input: any) {
    console.log(`Executing tool: ${toolName}`)

    const tool = toolRegistry.get(toolName)

    try {
      const result = await tool.execute(input)

      return {
        success: true,
        tool: toolName,
        result
      }
    } catch (error: any) {
      console.error("Tool execution failed:", error)

      return {
        success: false,
        tool: toolName,
        error: error.message
      }
    }
  }
}

export const toolExecutor = new ToolExecutor()