'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Home, Package, Settings, Shield } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@workspace/ui/components/ui/sidebar';

import fastapiLogo from '@/assets/images/fastapi-logo.svg';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Items',
    url: '/dashboard/items',
    icon: Package,
  },
  {
    title: 'User Settings',
    url: '/dashboard/settings',
    icon: Settings,
  },
  {
    title: 'Admin',
    url: '/dashboard/admin',
    icon: Shield,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r bg-white dark:bg-slate-900">
      <SidebarHeader className="p-6">
        <Link href="/dashboard" className="flex items-center space-x-3">
          <Image
            src={fastapiLogo}
            alt="FastAPI Logo"
            width={500}
            height={500}
            className="w-40 h-auto"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="text-gray-700 dark:text-gray-300 hover:text-slate-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-slate-800 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-slate-800"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>Logged in as:</p>
          <p className="font-medium">admin@example.com</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
