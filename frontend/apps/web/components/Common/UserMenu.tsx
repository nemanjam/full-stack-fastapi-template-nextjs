import Link from 'next/link';

import { FaUserAstronaut } from 'react-icons/fa';
import { FiLogOut, FiUser } from 'react-icons/fi';

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@workspace/ui/components/tiangolo-ui/menu';

import useAuth from '@/hooks/useAuth';

const UserMenu = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {/* Desktop */}
      <div className="flex">
        <MenuRoot>
          <MenuTrigger>
            <button
              data-testid="user-menu"
              className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white max-w-[150px] truncate hover:bg-blue-700"
              type="button"
            >
              <FaUserAstronaut fontSize="18" />
              <span>{user?.full_name || 'User'}</span>
            </button>
          </MenuTrigger>

          <MenuContent>
            <Link href="settings">
              <MenuItem
                closeOnSelect
                value="user-settings"
                className="flex items-center gap-2 py-2 cursor-pointer"
              >
                <FiUser fontSize="18px" />
                <span className="flex-1">My Profile</span>
              </MenuItem>
            </Link>

            <MenuItem
              value="logout"
              onClick={handleLogout}
              className="flex items-center gap-2 py-2 cursor-pointer"
            >
              <FiLogOut />
              <span>Log Out</span>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </div>
    </>
  );
};

export default UserMenu;
