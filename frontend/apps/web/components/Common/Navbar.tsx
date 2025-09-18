import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import UserMenu from './UserMenu';

import Logo from '@/assets/images/fastapi-logo.svg';

const Navbar: FC = () => {
  return (
    <div className="hidden md:flex justify-between items-center sticky top-0 w-full p-4 text-white bg-gray-800">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={180} height={60} className="w-[180px] max-w-48" />
      </Link>
      <div className="flex items-center gap-2">
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
