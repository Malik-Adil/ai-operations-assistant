import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "$29",
    period: "/ month",
    features: [
      "5,000 automation jobs",
      "Basic integrations",
      "AI event analysis",
      "Automation dashboard",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Growth Plan",
    price: "$99",
    period: "/ month",
    features: [
      "50,000 automation jobs",
      "Advanced integrations",
      "Workflow automation",
      "Priority processing",
    ],
    cta: "Get Started",
    href: "/signup?plan=growth",
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    period: " pricing",
    features: [
      "Unlimited automations",
      "Dedicated infrastructure",
      "Enterprise integrations",
      "Advanced security",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-slate-200 bg-slate-50/50 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Simple Usage Based Pricing
          </h2>
        </div>
        <div className="mx-auto mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border bg-white p-8 ${
                plan.highlighted
                  ? "border-slate-900 shadow-lg ring-2 ring-slate-900"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  {plan.price}
                </span>
                <span className="text-slate-600">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlighted
                    ? "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900"
                    : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-slate-900"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
