import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteAccountDialog } from "./delete-account-dialog";

export function AccountSection() {
  return (
    <Card className="border-zinc-200 bg-white">
      <CardHeader>
        <CardTitle className="text-zinc-900">Account</CardTitle>
        <CardDescription className="text-zinc-600">
          Manage your account settings and security.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col gap-2 border-t border-zinc-200 pt-6">
          <p className="text-sm font-medium text-zinc-900">Delete Account</p>
          <p className="text-sm text-zinc-600">
            Permanently remove your account and all associated data.
          </p>
          <DeleteAccountDialog />
        </div>
      </CardContent>
    </Card>
  );
}
