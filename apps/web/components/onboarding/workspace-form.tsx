"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { WorkspaceProgress } from "./workspace-progress";

const INDUSTRIES = ["SaaS", "E-commerce", "Agency", "Finance", "Healthcare", "Other"] as const;
const COMPANY_SIZES = ["1–10", "11–50", "51–200", "200+"] as const;

export interface WorkspaceFormData {
  companyName: string;
  website: string;
  industry: (typeof INDUSTRIES)[number];
  size: (typeof COMPANY_SIZES)[number];
}

const initialValues: WorkspaceFormData = {
  companyName: "",
  website: "",
  industry: "SaaS",
  size: "1–10",
};

export function WorkspaceForm() {
  const [formData, setFormData] = useState<WorkspaceFormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    setIsCreatingWorkspace(true);
  };

  const handleProgressError = (message: string) => {
    setError(message);
    setIsCreatingWorkspace(false);
    setIsSubmitting(false);
  };

  if (isCreatingWorkspace) {
    return (
      <WorkspaceProgress formData={formData} onError={handleProgressError} />
    );
  }

  return (
    <Card className="w-full max-w-md border-slate-200 shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="companyName" className="mb-1.5 block text-left text-sm font-medium text-slate-700">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              placeholder="Acme Inc"
            />
          </div>
          <div>
            <label htmlFor="website" className="mb-1.5 block text-left text-sm font-medium text-slate-700">
              Company Website
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label htmlFor="industry" className="mb-1.5 block text-left text-sm font-medium text-slate-700">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 pr-8 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              {INDUSTRIES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="size" className="mb-1.5 block text-left text-sm font-medium text-slate-700">
              Company Size
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 pr-8 text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              {COMPANY_SIZES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          {error && (
            <p className="text-left text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-50"
            >
              {isSubmitting ? "Creating…" : "Create Workspace"}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
