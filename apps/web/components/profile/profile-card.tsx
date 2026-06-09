"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/auth";
import { User } from "lucide-react";

function getProviderLabel(provider: string | null): string {
  if (!provider) return "—";
  return provider.charAt(0).toUpperCase() + provider.slice(1).toLowerCase();
}

export function ProfileCard() {
  const user = getCurrentUser();

  if (!user) {
    return (
      <Card className="border-zinc-200 bg-white">
        <CardHeader>
          <CardTitle className="text-zinc-900">Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-500">You are not signed in.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-zinc-200 bg-white">
      <CardHeader>
        <CardTitle className="text-zinc-900">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-100 text-zinc-500">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-8 w-8" aria-hidden />
            )}
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <p className="truncate text-base font-medium text-zinc-900">
              {user.name ?? "—"}
            </p>
            <p className="truncate text-sm text-zinc-600">{user.email}</p>
            <div className="pt-2">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Provider
              </p>
              <p className="text-sm text-zinc-700">
                {getProviderLabel(user.provider)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
