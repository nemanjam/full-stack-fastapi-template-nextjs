import { FC } from 'react';

import { UsersService } from '@/client/sdk.gen';

const WelcomeCurrentUser: FC = async () => {
  const result = await UsersService.readUserMe();
  const currentUser = result.data;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {currentUser
          ? `Welcome back, ${currentUser.full_name ?? currentUser.email}!`
          : 'Welcome back!'}
        &nbsp;Here&apos;s what&apos;s happening with your application.
      </p>
    </div>
  );
};

export default WelcomeCurrentUser;
