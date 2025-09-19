import { FC } from 'react';

export interface Props {}

const AdminPage: FC<Props> = () => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Admin page</h1>
      </div>
    </div>
  );
};

export default AdminPage;
