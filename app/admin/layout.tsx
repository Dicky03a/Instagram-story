import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900">
          <div className="flex h-16 items-center border-b px-4 bg-white dark:bg-slate-800">
            <SidebarTrigger />
            <h1 className="ml-4 text-xl font-bold">Admin Dashboard</h1>
            <div className="ml-auto flex items-center space-x-4">
              <span className="text-sm font-medium">{session.user?.name}</span>
            </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
