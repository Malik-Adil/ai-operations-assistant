import { AutomationRule } from "../rule"
import { toolExecutor } from "../../tools/executor-instance"

export const highPriorityTicketRule: AutomationRule<any> = {
  name: "High Priority Ticket",

  condition: (result) => {
    return result.priority === "high"
  },

  action: async (result, context) => {
    await toolExecutor.execute("create_task", {
        title: "Handle high priority support ticket",
        description: result.responseDraft
      }, context)
  }
}