import TableSkeleton from '@workspace/ui/components/skeletons/table';

import ErrorBoundarySuspense from '@/components/common/error-boundary-suspense';
import DashboardTitle from '@/components/dashboard-title';
import { DialogUserCreateButton } from '@/components/dashboard/dialog-user-create';
import TableAdmin from '@/components/dashboard/table-admin';

import type { FC } from 'react';

interface Props {
  params: Promise<{ page: string }>;
}

const AdminPage: FC<Props> = async ({ params }) => {
  const { page } = await params;

  const currentPage = parseInt(page) || 1;

  return (
    <div className="space-y-6">
      <DashboardTitle
        title="Admin Panel"
        description="Manage users and their permissions across the application."
        contentRight={<DialogUserCreateButton />}
      />
      <ErrorBoundarySuspense fallback={<TableSkeleton />}>
        <TableAdmin currentPage={currentPage} />
      </ErrorBoundarySuspense>
    </div>
  );
};

export default AdminPage;
