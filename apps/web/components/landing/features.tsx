import {
  Brain,
  Workflow,
  Wrench,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

const features: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "AI Event Analysis",
    description:
      "The platform reads incoming messages, tickets, and events and extracts structured information using AI.",
    icon: Brain,
  },
  {
    title: "Automation Rules Engine",
    description:
      "Define rules that allow AI insights to trigger automated workflows across your systems.",
    icon: Workflow,
  },
  {
    title: "Tool Execution",
    description:
      "Execute real actions such as creating tasks, sending notifications, or updating records across connected systems.",
    icon: Wrench,
  },
  {
    title: "Automation Dashboard",
    description:
      "Monitor automation activity, track executed tools, and review AI decisions in a centralized dashboard.",
    icon: LayoutDashboard,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-slate-200 bg-slate-50/50 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            AI Powered Automation Platform
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Turn events from your tools into intelligent automated actions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <feature.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
