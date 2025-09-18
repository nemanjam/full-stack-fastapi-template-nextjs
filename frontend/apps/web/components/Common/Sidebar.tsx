import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { FaBars } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@workspace/ui/components/tiangolo-ui/drawer';

import SidebarItems from '@/components/Common/SidebarItems';
import useAuth from '@/hooks/useAuth';

import type { UserPublic } from '@/client';

const Sidebar = () => {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<UserPublic>(['currentUser']);
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {/* Mobile */}
      <DrawerRoot placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <button
            aria-label="Open Menu"
            className="absolute z-[100] m-4 flex md:hidden bg-transparent text-inherit"
            type="button"
          >
            <FaBars />
          </button>
        </DrawerTrigger>
        <DrawerContent className="max-w-[280px]">
          <DrawerCloseTrigger />
          <DrawerBody>
            <div className="flex flex-col justify-between">
              <div>
                <SidebarItems />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-4 px-4 py-2 w-full text-left hover:bg-gray-100"
                  type="button"
                >
                  <FiLogOut />
                  <span>Log Out</span>
                </button>
              </div>
              {currentUser?.email && (
                <span className="text-sm p-2 block">Logged in as: {currentUser.email}</span>
              )}
            </div>
          </DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>

      {/* Desktop */}

      <div className="hidden md:flex sticky top-0 min-w-[280px] h-screen p-4 bg-gray-50">
        <div className="w-full">
          <SidebarItems />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
