import { toolRegistry } from "./tool-registry"
import { createTaskTool } from "./create-task.tool"

export function registerTools() {
  toolRegistry.register(createTaskTool)
}