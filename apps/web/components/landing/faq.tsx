"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does AI Operations Assistant do?",
    answer:
      "The platform automatically analyzes events such as tickets, emails, or system notifications and executes automated workflows based on AI insights.",
  },
  {
    question: "Which tools can I connect?",
    answer:
      "You can integrate tools such as Slack, Shopify, Zendesk, and many others through OAuth based integrations.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. Automations can be configured through the dashboard using simple rules and integrations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. The platform follows modern security practices and isolates each workspace to ensure customer data privacy.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <dl className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-lg border border-slate-200 bg-slate-50/50"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100/80"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="border-t border-slate-200 px-5 py-4 text-slate-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
