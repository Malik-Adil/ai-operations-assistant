/*
FILE
execution-context.ts

PURPOSE
Tracks all automation actions executed during a job.

ARCHITECTURE
Each job creates a context object.
Tools record execution results here.

FUTURE USAGE
Will power:
- automation dashboards
- debugging
- analytics
*/

export interface ToolExecutionRecord {
    tool: string
    status: "success" | "failed"
    error?: string
  }
  
  export interface ExecutionContext {
    actions: ToolExecutionRecord[]
  }
  
  export function createExecutionContext(): ExecutionContext {
    return {
      actions: []
    }
  }