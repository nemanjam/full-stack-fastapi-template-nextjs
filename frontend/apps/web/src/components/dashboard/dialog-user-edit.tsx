import { Loader2 } from 'lucide-react';

import { Button } from '@workspace/ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@workspace/ui/components/ui/dialog';
import { Label } from '@workspace/ui/components/ui/label';
import { Switch } from '@workspace/ui/components/ui/switch';

import type { UserPublic } from '@/client/types.gen';
import type { FC } from 'react';

interface Props {
  user: UserPublic;
}

const DialogUserEdit: FC<Props> = async ({ user }) => {
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update the user's information and permissions.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-email">Email Address *</Label>
            <Input
              id="edit-email"
              type="email"
              placeholder="Enter user email..."
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-name">Full Name *</Label>
            <Input
              id="edit-name"
              placeholder="Enter user full name..."
              value={formData.full_name}
              onChange={(e) => setFormData((prev) => ({ ...prev, full_name: e.target.value }))}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="edit-superuser"
              checked={formData.is_superuser}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, is_superuser: checked }))
              }
              disabled={state.currentUser?.id === editingUser?.id}
            />
            <Label htmlFor="edit-superuser">
              Administrator privileges
              {state.currentUser?.id === editingUser?.id && (
                <span className="text-sm text-gray-500 ml-2">(Cannot modify your own role)</span>
              )}
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpdateUser} disabled={formLoading}>
            {formLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              'Update User'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUserEdit;
