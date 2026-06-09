"use client";

import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { logout } from "@/lib/logout";
import { Avatar } from "@/components/ui/avatar";

const PATH_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/automations": "Automations",
  "/dashboard/integrations": "Integrations",
  "/dashboard/jobs": "Jobs",
  "/dashboard/logs": "Logs",
  "/dashboard/profile": "Profile",
  "/dashboard/settings": "Settings",
};

function getPageTitle(pathname: string): string {
  return PATH_TITLES[pathname] ?? "Dashboard";
}

export function Topbar() {
  const pathname = usePathname();
  const user = getCurrentUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);

  const pageTitle = getPageTitle(pathname);
  const displayName = user?.name ?? "User";
  const initial = displayName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    setMenuOpen(false);
    await logout();
  };

  if (!user) {
    return (
      <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6">
        <h1 className="text-lg font-semibold text-zinc-900">{pageTitle}</h1>
      </header>
    );
  }

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-zinc-900">{pageTitle}</h1>

      <div className="relative flex items-center gap-3" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex cursor-pointer items-center gap-3 rounded-lg py-2 pr-1 transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-label="Open user menu"
        >
          <Avatar src={user.avatar} fallback={initial} className="h-9 w-9" />
          <span className="text-sm font-medium text-zinc-700">{displayName}</span>
        </button>

        {menuOpen && (
          <div
            className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-zinc-200 bg-white py-1 shadow-lg transition-opacity"
            role="menu"
          >
            <Link
              href="/dashboard/profile"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
              className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              <User className="h-4 w-4 shrink-0" aria-hidden />
              Profile
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm text-zinc-700 transition-colors hover:bg-zinc-100"
            >
              <LogOut className="h-4 w-4 shrink-0" aria-hidden />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
