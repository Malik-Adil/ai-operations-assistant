import { LoginCard } from "@/components/auth/login-card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Sign in to AI Operations Assistant
        </h1>
        <p className="text-slate-600">Use your existing account to continue.</p>
        <LoginCard />
      </div>
    </div>
  );
}
