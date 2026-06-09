import { SidebarLayout } from "@/components/dashboard/sidebar-layout";

export default function SettingsPage() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold text-zinc-900">Settings</h1>
      <p className="mt-2 text-zinc-600">Manage workspace and automation settings.</p>
    </SidebarLayout>
  );
}
