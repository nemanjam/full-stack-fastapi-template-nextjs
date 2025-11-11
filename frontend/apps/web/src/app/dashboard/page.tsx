import { redirect } from 'next/navigation';

import CardSmallSkeleton from '@workspace/ui/components/skeletons/card-small';
import ListSkeleton from '@workspace/ui/components/skeletons/list';
import { Skeleton } from '@workspace/ui/components/ui/skeleton';

import ErrorBoundarySuspense from '@/components/common/error-boundary-suspense';
import CardCurrentUser from '@/components/dashboard/card-current-user';
import CardSystemHealth from '@/components/dashboard/card-system-health';
import CardTotalItems from '@/components/dashboard/card-total-items';
import CardTotalUsers from '@/components/dashboard/card-total-users';
import ListRecentItems from '@/components/dashboard/list-recent-items';
import ListRecentUsers from '@/components/dashboard/list-recent-users';
import ListSystemStatus from '@/components/dashboard/list-system-status';
import WelcomeCurrentUser from '@/components/dashboard/welcome-current-user';
import { UsersService } from '@/client/sdk.gen';
import { ROUTES } from '@/constants/routes';

import type { FC } from 'react';

const { LOGIN } = ROUTES;

const DashboardPage: FC = async () => {
  const result = await UsersService.readUserMe();

  if (result.error) redirect(LOGIN);

  const currentUser = result.data;

  return (
    <div className="space-y-6">
      <ErrorBoundarySuspense fallback={<Skeleton className="h-12 w-full" />}>
        <WelcomeCurrentUser currentUser={currentUser} />
      </ErrorBoundarySuspense>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        <ErrorBoundarySuspense fallback={<CardSmallSkeleton />}>
          <CardTotalUsers />
        </ErrorBoundarySuspense>
        <ErrorBoundarySuspense fallback={<CardSmallSkeleton />}>
          <CardTotalItems />
        </ErrorBoundarySuspense>
        <ErrorBoundarySuspense fallback={<CardSmallSkeleton />}>
          <CardCurrentUser />
        </ErrorBoundarySuspense>
        <ErrorBoundarySuspense fallback={<CardSmallSkeleton />}>
          <CardSystemHealth />
        </ErrorBoundarySuspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <ErrorBoundarySuspense fallback={<ListSkeleton />}>
          <ListRecentUsers />
        </ErrorBoundarySuspense>
        <ErrorBoundarySuspense fallback={<ListSkeleton />}>
          <ListRecentItems />
        </ErrorBoundarySuspense>
      </div>
      <ErrorBoundarySuspense fallback={<ListSkeleton count={3} />}>
        <ListSystemStatus />
      </ErrorBoundarySuspense>
    </div>
  );
};
export default DashboardPage;
