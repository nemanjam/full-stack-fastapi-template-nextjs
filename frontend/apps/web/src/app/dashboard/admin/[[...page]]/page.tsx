import TableAdmin from '@/components/dashboard/table-admin';

import type { FC } from 'react';

interface Props {
  params: Promise<{ page: string }>;
}

const AdminPage: FC<Props> = async ({ params }) => {
  const { page } = await params;

  const currentPage = parseInt(page) || 1;

  return <TableAdmin currentPage={currentPage} />;
};

export default AdminPage;
