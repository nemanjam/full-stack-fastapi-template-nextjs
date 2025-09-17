import { FC } from 'react';

import useAuth from '@/hooks/useAuth';

export interface Props {}

const HomePage: FC<Props> = () => {
  const { user: currentUser } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
        </h1>
        <p>Welcome back, nice to see you again!</p>
      </div>
    </div>
  );
};

export default HomePage;
