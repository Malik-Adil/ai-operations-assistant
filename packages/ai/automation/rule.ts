export interface AutomationRule<T> {
    name: string
  
    condition: (input: T) => boolean
  
    action: (input: T, context: any) => Promise<void>
  }