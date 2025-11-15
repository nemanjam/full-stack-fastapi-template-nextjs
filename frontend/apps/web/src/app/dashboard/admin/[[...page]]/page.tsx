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
      <TableAdmin currentPage={currentPage} />;
    </div>
  );
};

export default AdminPage;
