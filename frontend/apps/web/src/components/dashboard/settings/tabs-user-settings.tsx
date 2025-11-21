'use client';

import { AlertTriangle, Lock, User } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/ui/tabs';

import ButtonProfileDelete from '@/components/dashboard/settings/button-profile-delete';
import DialogProfileDelete from '@/components/dashboard/settings/dialog-profile-delete';
import FormPasswordUpdate from '@/components/dashboard/settings/form-password-update';
import FormProfileUpdate from '@/components/dashboard/settings/form-profile-update';

import type { UserPublic } from '@/client/types.gen';
import type { FC } from 'react';

interface Props {
  currentUser: UserPublic;
}

const TabsUserSettings: FC<Props> = ({ currentUser }) => {
  return (
    <>
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>My Profile</span>
          </TabsTrigger>
          <TabsTrigger value="password" className="flex items-center space-x-2">
            <Lock className="h-4 w-4" />
            <span>Password</span>
          </TabsTrigger>
          {/* Admin can't delete account */}
          {!currentUser.is_superuser && (
            <TabsTrigger value="danger" className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Danger Zone</span>
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="profile">
          <TabProfile currentUser={currentUser} />
        </TabsContent>

        <TabsContent value="password">
          <TabPassword />
        </TabsContent>

        {!currentUser.is_superuser && (
          <TabsContent value="danger">
            <TabDeleteAccount />
          </TabsContent>
        )}
      </Tabs>

      <DialogProfileDelete />
    </>
  );
};

export default TabsUserSettings;

interface TabProfileProps {
  currentUser: UserPublic;
}

const TabProfile: FC<TabProfileProps> = ({ currentUser }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormProfileUpdate currentUser={currentUser} />
      </CardContent>
    </Card>
  );
};

const TabPassword: FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Change Password</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <FormPasswordUpdate />
    </CardContent>
  </Card>
);

const TabDeleteAccount: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Danger Zone</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ButtonProfileDelete />
      </CardContent>
    </Card>
  );
};
