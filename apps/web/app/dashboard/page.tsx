import Link from "next/link";
import { SidebarLayout } from "@/components/dashboard/sidebar-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plug, Wrench, Workflow } from "lucide-react";

const SETUP_CARDS = [
  {
    title: "Connect Integrations",
    description:
      "Connect your external systems to start receiving events.",
    icon: Plug,
    buttonLabel: "Connect Tools",
    href: "/dashboard/integrations",
  },
  {
    title: "Enable Automation Tools",
    description:
      "Activate automation tools that perform actions across your systems.",
    icon: Wrench,
    buttonLabel: null,
    href: "/dashboard/settings",
  },
  {
    title: "Create Automation",
    description:
      "Define rules that allow AI to automate operational workflows.",
    icon: Workflow,
    buttonLabel: null,
    href: "/dashboard/automations",
  },
];

export default function DashboardPage() {
  return (
    <SidebarLayout>
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Welcome to AI Operations Assistant
        </h1>
        <p className="mt-2 text-lg text-zinc-600">
          Your automation workspace is ready.
        </p>
      </header>

      <section aria-label="Setup steps">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SETUP_CARDS.map((card) => (
            <Card
              key={card.title}
              className="flex flex-col border-zinc-200 bg-white transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                  <card.icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-base font-semibold text-zinc-900">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-zinc-600">
                  {card.description}
                </CardDescription>
              </CardHeader>
              {card.buttonLabel && (
                <CardContent className="mt-auto pt-0">
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    {card.buttonLabel}
                  </Link>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>
    </SidebarLayout>
  );
}
