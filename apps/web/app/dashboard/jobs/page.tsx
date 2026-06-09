import { SidebarLayout } from "@/components/dashboard/sidebar-layout";

export default function JobsPage() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold text-zinc-900">Jobs</h1>
      <p className="mt-2 text-zinc-600">View and monitor automation jobs.</p>
    </SidebarLayout>
  );
}
