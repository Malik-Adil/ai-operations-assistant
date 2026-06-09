"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Workflow,
  Plug,
  Briefcase,
  FileText,
  Settings,
  User,
} from "lucide-react";
import { Topbar } from "./topbar";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/automations", label: "Automations", icon: Workflow },
  { href: "/dashboard/integrations", label: "Integrations", icon: Plug },
  { href: "/dashboard/jobs", label: "Jobs", icon: Briefcase },
  { href: "/dashboard/logs", label: "Logs", icon: FileText },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
] as const;

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside
        className="fixed inset-y-0 left-0 z-40 w-64 flex flex-col border-r border-zinc-800 bg-zinc-900"
        aria-label="Main navigation"
      >
        <div className="flex h-14 items-center border-b border-zinc-800 px-6">
          <Link
            href="/dashboard"
            className="text-lg font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
          >
            AI Operations Assistant
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 p-3">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-300 hover:bg-zinc-800/80 hover:text-zinc-100"
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col pl-64">
        <Topbar />
        <main className="min-h-0 flex-1 bg-zinc-50 p-8">{children}</main>
      </div>
    </div>
  );
}
