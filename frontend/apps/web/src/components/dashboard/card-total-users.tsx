import { FC } from 'react';

import { Users } from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';

import { UsersService } from '@/client/sdk.gen';

const CardTotalUsers: FC = async () => {
  const result = await UsersService.readUsers();
  const count = result.data?.count ?? 0;

  return (
    <CardSmall
      title="Total Users"
      status="Registered users"
      icon={Users}
      content={<div className="text-2xl font-bold text-gray-900 dark:text-white">{count}</div>}
    />
  );
};

export default CardTotalUsers;
