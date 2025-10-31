import { FC } from 'react';

import { SidebarProvider } from '@workspace/ui/components/ui/sidebar';

import { AppSidebar } from '@/components/app-sidebar';
import { DashboardHeader } from '@/components/dashboard-header';

import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-900">{children}</main>
      </div>
    </div>
  </SidebarProvider>
);

export default DashboardLayout;
