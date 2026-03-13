import { Tool } from "./tool"

class ToolRegistry {
  private tools: Map<string, Tool> = new Map()

  register(tool: Tool) {
    if (this.tools.has(tool.name)) {
      throw new Error(`Tool already registered: ${tool.name}`)
    }

    this.tools.set(tool.name, tool)
  }

  get(name: string): Tool {
    const tool = this.tools.get(name)

    if (!tool) {
      throw new Error(`Tool not found: ${name}`)
    }

    return tool
  }

  list(): Tool[] {
    return Array.from(this.tools.values())
  }
}

export const toolRegistry = new ToolRegistry()