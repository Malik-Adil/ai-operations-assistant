export interface ToolInputSchema {
    type: "object"
    properties: Record<string, any>
    required?: string[]
    /** Index signature for compatibility with Anthropic SDK InputSchema */
    [key: string]: unknown
  }
  
  export interface Tool {
    name: string
    description: string
  
    inputSchema: ToolInputSchema
  
    execute(input: any): Promise<any>
  }