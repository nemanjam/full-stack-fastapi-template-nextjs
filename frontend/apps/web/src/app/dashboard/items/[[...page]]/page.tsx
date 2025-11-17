import TableSkeleton from '@workspace/ui/components/skeletons/table';

import ErrorBoundarySuspense from '@/components/common/error-boundary-suspense';
import DashboardTitle from '@/components/dashboard-title';
import { DialogItemCreateButton } from '@/components/dashboard/dialog-item-create';
import TableItems from '@/components/dashboard/table-items';

import type { FC } from 'react';

interface Props {
  params: Promise<{ page: string }>;
}

const ItemsPage: FC<Props> = async ({ params }) => {
  const { page } = await params;

  const currentPage = parseInt(page) || 1;

  return (
    <div className="space-y-6">
      <DashboardTitle
        title="Items Management"
        description="Manage your application items and their properties."
        contentRight={<DialogItemCreateButton />}
      />
      <ErrorBoundarySuspense fallback={<TableSkeleton />}>
        <TableItems currentPage={currentPage} />
      </ErrorBoundarySuspense>
    </div>
  );
};

export default ItemsPage;
