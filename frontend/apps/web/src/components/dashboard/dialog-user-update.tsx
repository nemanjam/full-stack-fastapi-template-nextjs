'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@workspace/ui/components/ui/dialog';

import FormUserUpdate from '@/components/dashboard/form-user-update';

import type { UserPublic } from '@/client/types.gen';
import type { FC } from 'react';

interface Props {
  user: UserPublic;
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

const DialogUserUpdate: FC<Props> = ({ user, isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update the user&apos;s information and permissions.</DialogDescription>
        </DialogHeader>
        <FormUserUpdate user={user} onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogUserUpdate;
