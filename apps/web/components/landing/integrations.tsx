import { MessageSquare, ShoppingBag, Headphones, CreditCard } from "lucide-react";
import { Mail, Users, Code2, ListChecks } from "lucide-react";

const integrations = [
  { name: "Slack", icon: MessageSquare },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Zendesk", icon: Headphones },
  { name: "Stripe", icon: CreditCard },
  { name: "Google Workspace", icon: Mail },
  { name: "Microsoft Teams", icon: Users },
  { name: "GitHub", icon: Code2 },
  { name: "ClickUp", icon: ListChecks },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="border-b border-slate-200 bg-slate-50/50 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="integrations-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="integrations-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Connect Your Existing Tools
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            AI Operations Assistant integrates with the tools your team already
            uses.
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <item.icon className="h-6 w-6" aria-hidden />
              </div>
              <span className="text-sm font-medium text-slate-900">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
