import { FC } from 'react';

import CardCurrentUser from '@/components/dashboard/card-current-user';
import CardSystemHealth from '@/components/dashboard/card-system-health';
import CardTotalItems from '@/components/dashboard/card-total-items';
import CardTotalUsers from '@/components/dashboard/card-total-users';
import ListRecentItems from '@/components/dashboard/list-recent-items';
import ListRecentUsers from '@/components/dashboard/list-recent-users';
import ListSystemStatus from '@/components/dashboard/list-system-status';
import WelcomeCurrentUser from '@/components/dashboard/welcome-current-user';

const DashboardPage: FC = () => (
  <div className="space-y-6">
    <WelcomeCurrentUser />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      <CardTotalUsers />
      <CardTotalItems />
      <CardCurrentUser />
      <CardSystemHealth />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <ListRecentUsers />
      <ListRecentItems />
    </div>
    <ListSystemStatus />
  </div>
);

export default DashboardPage;
