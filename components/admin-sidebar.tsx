"use client"

import { 
  LayoutDashboard, 
  Briefcase, 
  Code2, 
  Wrench, 
  LogOut 
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Experiences",
    url: "/admin/experiences",
    icon: Briefcase,
  },
  {
    title: "Views",
    url: "/admin/views",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: Code2,
  },
  {
    title: "Skills",
    url: "/admin/skills",
    icon: Wrench,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b h-16 flex items-center px-6">
        <Link href="/" className="font-bold text-xl tracking-tight">
          PORTFOLIO <span className="text-primary">CMS</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    render={<Link href={item.url} />}
                    isActive={pathname === item.url}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-destructive hover:text-destructive"
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
