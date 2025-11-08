import { FC } from 'react';

import { Users } from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';

import { UsersService } from '@/client/sdk.gen';

const CardTotalUsers: FC = async () => {
  const { data: users, error } = await UsersService.readUsers();

  return (
    <CardSmall
      title="Total Users"
      icon={Users}
      content={
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {users?.data.length ?? 0}
        </div>
      }
      status="Registered users"
    />
  );
};

export default CardTotalUsers;
