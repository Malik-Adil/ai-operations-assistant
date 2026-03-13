import { Tool } from "./tool"

export const createTaskTool: Tool = {
  name: "create_task",

  description: "Create a task in the internal task system",

  inputSchema: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "Title of the task"
      },
      priority: {
        type: "string",
        enum: ["low", "medium", "high"]
      }
    },
    required: ["title"]
  },

  async execute(input) {
    console.log("Creating task:", input)

    const task = {
      id: `task_${Date.now()}`,
      title: input.title,
      priority: input.priority || "medium",
      createdAt: new Date().toISOString()
    }

    return task
  }
}