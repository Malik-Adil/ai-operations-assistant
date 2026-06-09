"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function AccountDeletedBanner() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get("account_deleted") === "1") {
      setShow(true);
      const t = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(t);
    }
  }, [searchParams]);

  if (!show) return null;

  return (
    <div
      role="status"
      className="flex items-center gap-3 border-b border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800"
    >
      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
      <p className="text-sm font-medium">
        Your account has been successfully deleted.
      </p>
    </div>
  );
}
