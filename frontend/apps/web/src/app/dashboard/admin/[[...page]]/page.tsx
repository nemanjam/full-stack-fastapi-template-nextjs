import TableSkeleton from '@workspace/ui/components/skeletons/table';

import ErrorBoundarySuspense from '@/components/common/error-boundary-suspense';
import { DialogUserCreateButton } from '@/components/dashboard/admin/dialog-user-create';
import TableAdmin from '@/components/dashboard/admin/table-admin';
import DashboardTitle from '@/components/dashboard/common/dashboard-title';

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
