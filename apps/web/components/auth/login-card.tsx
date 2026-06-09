import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { OAuthButtons } from "./oauth-buttons";

export function LoginCard() {
  return (
    <Card className="w-full max-w-md border-slate-200 shadow-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold">AI Operations Assistant</CardTitle>
        <CardDescription>Use your existing account to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <OAuthButtons />
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 pt-0 text-center">
        <p className="text-xs text-slate-500">
          By continuing you agree to our{" "}
          <Link href="/terms" className="underline hover:text-slate-700">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-slate-700">
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
