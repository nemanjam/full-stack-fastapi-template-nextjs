import { FC } from 'react';

import { Activity } from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';

import { UsersService } from '@/client/sdk.gen';

const CardCurrentUser: FC = async () => {
  // Note: called on server, must send auth_cookie (runtime client config)
  const result = await UsersService.readUserMe();
  const currentUser = result.data ?? { full_name: undefined, email: undefined };

  console.log('result', result);

  // Todo: create Error classes
  // const result = await UsersService.readUserMe({ baseUrl: 'https://invalid.localhost' });
  if (result.error) throw new Error((result.error as any).detail);

  return (
    <CardSmall
      title="Current User"
      status="Logged in user"
      icon={Activity}
      content={
        <div className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {currentUser.full_name ?? currentUser.email ?? 'Unknown'}
        </div>
      }
    />
  );
};

export default CardCurrentUser;
