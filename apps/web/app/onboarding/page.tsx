import { WorkspaceForm } from "@/components/onboarding/workspace-form";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Create Your Workspace
        </h1>
        <p className="text-slate-600">
          Tell us about your company so we can set up your automation workspace.
        </p>
        <WorkspaceForm />
      </div>
    </div>
  );
}
