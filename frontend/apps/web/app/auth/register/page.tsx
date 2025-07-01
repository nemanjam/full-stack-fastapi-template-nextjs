import { FC } from 'react';

export interface Props {}

const RegisterPage: FC<Props> = () => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Register page</h1>
      </div>
    </div>
  );
};

export default RegisterPage;
