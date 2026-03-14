
import { AutomationRule } from "./rule"

export class RulesEngine<T> {
  private rules: AutomationRule<T>[] = []

  register(rule: AutomationRule<T>) {
    this.rules.push(rule)
  }

  async evaluate(input: T, context: any) {
    for (const rule of this.rules) {
      if (rule.condition(input)) {
        console.log(`Rule triggered: ${rule.name}`)
        await rule.action(input, context)
      }
    }
  }
}