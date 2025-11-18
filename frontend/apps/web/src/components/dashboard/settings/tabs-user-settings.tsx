'use client';

import { AlertTriangle, Lock, User } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/ui/tabs';

import FormProfileUpdate from '@/components/dashboard/settings/form-profile-update';
import { UserPublic } from '@/client/types.gen';

import type { FC } from 'react';

interface Props {
  user: UserPublic;
}

const TabsUserSettings: FC<Props> = ({ user }) => {
  return (
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
        <TabsTrigger value="danger" className="flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4" />
          <span>Danger Zone</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <TabProfile user={user} />
      </TabsContent>

      <TabsContent value="password">
        <TabPassword user={user} />
      </TabsContent>

      <TabsContent value="danger">
        <TabDeleteAccount userId={user.id} />
      </TabsContent>
    </Tabs>
  );
};

export default TabsUserSettings;

interface TabProfileProps {
  user: UserPublic;
}

const TabProfile: FC<TabProfileProps> = ({ user }) => {
  return (
    <TabsContent value="profile">
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormProfileUpdate user={user} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};

interface TabPasswordProps {
  user: UserPublic;
}

const TabPassword: FC<TabPasswordProps> = ({ user }) => {
  return (
    <TabsContent value="profile">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/*
          <FormPasswordUpdate user={user} />
        */}
        </CardContent>
      </Card>
    </TabsContent>
  );
};

interface TabDeleteAccountProps {
  userId: string;
}

const TabDeleteAccount: FC<TabDeleteAccountProps> = ({ userId }) => {
  return (
    <TabsContent value="profile">
      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/*
          <DeleteAccountButton userId={userId} />
           */}
        </CardContent>
      </Card>
    </TabsContent>
  );
};
