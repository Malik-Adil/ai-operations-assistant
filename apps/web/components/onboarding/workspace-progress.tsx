"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import type { WorkspaceFormData } from "./workspace-form";

const STATUS_MESSAGES = [
  "Initializing workspace...",
  "Preparing automation engine...",
  "Configuring integrations...",
  "Setting up environment...",
  "Almost ready...",
];

const PROGRESS_INTERVAL_MS = 100;
const PROGRESS_INCREMENT = 100 / 30; // ~3 seconds to 100% (30 steps × 100ms)
const MESSAGE_ROTATION_MS = 1000;

const CIRCLE_SIZE = 128;
const STROKE_WIDTH = 8;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface WorkspaceProgressProps {
  formData: WorkspaceFormData;
  onError: (message: string) => void;
}

export function WorkspaceProgress({ formData, onError }: WorkspaceProgressProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const apiPromiseRef = useRef<Promise<Response> | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    apiPromiseRef.current = apiPost("/api/workspace/create", {
      companyName: formData.companyName,
      website: formData.website,
      industry: formData.industry,
      size: formData.size,
    });
  }, [formData]);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + PROGRESS_INCREMENT));
    }, PROGRESS_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress < 100 || completedRef.current) return;
    const promise = apiPromiseRef.current;
    if (!promise) return;
    completedRef.current = true;
    promise
      .then((res) => {
        if (res.ok) {
          router.push("/dashboard");
        } else {
          onError("Failed to create workspace");
        }
      })
      .catch(() => {
        onError("Something went wrong");
      });
  }, [progress, router, onError]);

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, MESSAGE_ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress / 100);
  const displayProgress = Math.round(progress);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md border-slate-200 shadow-md">
        <CardContent className="flex flex-col items-center pt-8 pb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Creating your workspace
          </h2>
          <p className="mt-2 text-slate-600">
            Please wait while we prepare your automation environment.
          </p>

          <div className="relative mt-10 flex h-32 w-32 items-center justify-center">
            <svg
              className="h-32 w-32 -rotate-90"
              viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
              aria-hidden
            >
              <circle
                cx={CIRCLE_SIZE / 2}
                cy={CIRCLE_SIZE / 2}
                r={RADIUS}
                fill="none"
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
                className="text-gray-200"
              />
              <circle
                cx={CIRCLE_SIZE / 2}
                cy={CIRCLE_SIZE / 2}
                r={RADIUS}
                fill="none"
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
                strokeLinecap="round"
                className="text-slate-900 transition-[stroke-dashoffset] duration-100"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <span className="absolute text-lg font-semibold text-slate-900 tabular-nums">
              {displayProgress}%
            </span>
          </div>

          <p className="mt-6 min-h-[1.25rem] text-sm text-slate-600">
            {STATUS_MESSAGES[messageIndex]}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
