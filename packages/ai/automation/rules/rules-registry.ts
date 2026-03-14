/*
FILE: rules-registry.ts

PURPOSE
Central place where all automation rules are registered.

ARCHITECTURE
Instead of manually registering rules in each handler,
the registry loads all rules and attaches them to the RulesEngine.

FUTURE USAGE
Later this can dynamically load rules from:
- database
- config files
- plugin systems
*/

import { RulesEngine } from "../rules-engine"
import { highPriorityTicketRule } from "./support-ticket.rules"

export function createRulesEngine<T>() {
  const engine = new RulesEngine<T>()

  // register all rules here
  engine.register(highPriorityTicketRule)

  return engine
}