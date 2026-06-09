import { Sparkles, Zap, Layers } from "lucide-react";

const benefits = [
  {
    title: "Reduce Manual Work",
    description:
      "Eliminate repetitive operational tasks and let AI handle classification, routing, and workflow triggering.",
    icon: Sparkles,
  },
  {
    title: "Accelerate Operations",
    description:
      "Events are processed instantly, allowing teams to respond faster and operate more efficiently.",
    icon: Zap,
  },
  {
    title: "Centralized Automation",
    description:
      "Bring workflows from multiple systems into one AI powered automation platform.",
    icon: Layers,
  },
];

export function Benefits() {
  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="benefits-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Why Teams Use AI Operations Assistant
          </h2>
        </div>
        <div className="mx-auto mt-16 grid gap-10 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                <benefit.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
