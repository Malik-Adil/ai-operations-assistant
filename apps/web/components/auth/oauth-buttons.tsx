"use client";

import { Chrome, Github } from "lucide-react";

const GOOGLE_OAUTH_URL = "http://localhost:4000/auth/google";

export function OAuthButtons() {
  const handleGoogleClick = () => {
    window.location.href = GOOGLE_OAUTH_URL;
  };

  return (
    <div className="grid gap-3">
      <button
        type="button"
        onClick={handleGoogleClick}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        <Chrome className="h-5 w-5" aria-hidden />
        Continue with Google
      </button>
      <button
        type="button"
        disabled
        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-400"
        aria-disabled="true"
      >
        <Github className="h-5 w-5" aria-hidden />
        Continue with GitHub
      </button>
    </div>
  );
}
