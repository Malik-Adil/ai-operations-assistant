"use client";

import { useEffect, useState } from "react";

const STATUS_MESSAGES = [
  "Setting up your automation environment...",
  "Preparing your workspace...",
  "Configuring AI automation engine...",
  "Initializing integrations system...",
  "Almost ready...",
];

const ROTATION_INTERVAL_MS = 2000;

export function WorkspaceCreationLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-md">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        Creating your workspace
      </h2>
      <div className="mt-8 flex flex-col items-center gap-6">
        <div
          className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-slate-900 animate-spin"
          aria-hidden
        />
        <p
          className="min-h-[1.5rem] text-center text-sm text-slate-600 animate-pulse"
          key={messageIndex}
        >
          {STATUS_MESSAGES[messageIndex]}
        </p>
      </div>
    </div>
  );
}
