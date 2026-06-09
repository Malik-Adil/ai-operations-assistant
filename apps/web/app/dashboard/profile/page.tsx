import { SidebarLayout } from "@/components/dashboard/sidebar-layout";
import { ProfileCard } from "@/components/profile/profile-card";
import { AccountSection } from "@/components/profile/account-section";

export default function ProfilePage() {
  return (
    <SidebarLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Account Settings
          </h1>
          <p className="mt-2 text-lg text-zinc-600">
            Manage your profile and account preferences.
          </p>
        </header>
        <div className="space-y-6">
          <ProfileCard />
          <AccountSection />
        </div>
      </div>
    </SidebarLayout>
  );
}
