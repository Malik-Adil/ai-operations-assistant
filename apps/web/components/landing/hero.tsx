import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Automate support ticket triage",
  "Trigger workflows using AI",
  "Integrate with Slack, Shopify, Zendesk and more",
  "Monitor automation in real time",
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200 bg-slate-50/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Automate Operations with AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          AI Operations Assistant analyzes incoming events, understands context,
          and automatically executes workflows across your tools — reducing
          manual work and accelerating operations.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-auto"
          >
            Start Free
          </Link>
          <Link
            href="/demo"
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-auto"
          >
            View Demo
          </Link>
        </div>
        <ul className="mx-auto mt-14 grid max-w-2xl gap-3 text-left sm:grid-cols-2" role="list">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                aria-hidden
              />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
