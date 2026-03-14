import { toolRegistry } from "./tools/tool-registry"
import { ExecutionContext } from "./execution/execution-context"
export class ToolExecutor {

  async execute(toolName: string, payload: any, context: ExecutionContext) {
    const tool = toolRegistry.get(toolName)

    if (!tool) {
      throw new Error(`Tool not found: ${toolName}`)
    }

    console.log(`Executing tool: ${toolName}`)
  

    try {
      const result = await tool.execute(payload)

      console.log(`Tool success: ${toolName}`)
      
      context.actions.push({
        tool: toolName,
        status: "success"
      })
      

      return result
    } catch (error) {
      console.error(`Tool failed: ${toolName}`, error)
      
      context.actions.push({
        tool: toolName,
        status: "failed",
        error: error.message
      })
      
      throw error
    }
  }
}