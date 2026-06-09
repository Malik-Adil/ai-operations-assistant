import { Inbox, Brain, GitBranch, Zap } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Event Received",
    description:
      "Example events include support tickets, emails, CRM updates, or webhook triggers.",
    icon: Inbox,
  },
  {
    step: 2,
    title: "AI Analysis",
    description:
      "AI interprets the event, determines intent, and extracts structured data.",
    icon: Brain,
  },
  {
    step: 3,
    title: "Automation Decision",
    description: "Rules determine the correct workflow based on AI results.",
    icon: GitBranch,
  },
  {
    step: 4,
    title: "Tool Execution",
    description:
      "Actions are executed across connected systems automatically.",
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            From Event to Automation in Seconds
          </h2>
        </div>
        <div className="mx-auto mt-16">
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {steps.map((item, index) => (
              <li key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <span
                    className="absolute left-8 top-12 hidden h-0.5 w-[calc(100%-4rem)] bg-slate-200 lg:block"
                    aria-hidden
                  />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-700">
                    <item.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <span className="mt-4 text-sm font-semibold text-slate-500">
                    Step {item.step}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
