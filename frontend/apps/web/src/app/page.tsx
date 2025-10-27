import { FC } from 'react';

// import { isAuthenticated } from '@/lib/auth-with-cookie';
import { UsersService } from '@/client/sdk.gen';

// Must be client component to show loader before redirect
// Todo: rethink this

const isAuthenticated = async (): Promise<boolean> => {
  const { data: me } = await UsersService.readUserMe();
  console.log('me', me);

  const isAuth = Boolean(me?.id && me?.email);

  return isAuth;
};

const HomePage: FC = async () => {
  const isAuth = await isAuthenticated();

  if (!isAuth) return <div>Not authenticated</div>;

  // Show loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default HomePage;
