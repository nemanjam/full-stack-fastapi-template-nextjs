// because of state
'use client';

import { FC, useEffect, useState } from 'react';

import {
  Activity,
  AlertCircle,
  CheckCircle,
  Package,
  Settings,
  Users,
  XCircle,
} from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';
import List from '@workspace/ui/components/list';
import { Alert, AlertDescription } from '@workspace/ui/components/ui/alert';
import { Badge } from '@workspace/ui/components/ui/badge';

import ApiClient from '@/lib/api-client';

import type { ItemPublic, UserPublic } from '@/lib/api-client';

// import { getPetById } from '@/src/client/sdk.gen';
// import type { Pet } from '@/src/client/types.gen';

interface DashboardData {
  users: UserPublic[];
  items: ItemPublic[];
  currentUser: UserPublic | null;
  systemHealth: boolean;
}

interface DashboardState {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
}

const DashboardPage: FC = () => {
  const [state, setState] = useState<DashboardState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        // Get auth token from localStorage
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Fetch data in parallel
        const [usersResponse, itemsResponse, currentUserResponse, healthResponse] =
          await Promise.allSettled([
            ApiClient.usersReadUsers({
              headers: { Authorization: `Bearer ${token}` },
            }),
            ApiClient.itemsReadItems({
              headers: { Authorization: `Bearer ${token}` },
            }),
            ApiClient.usersReadUserMe({
              headers: { Authorization: `Bearer ${token}` },
            }),
            ApiClient.utilsHealthCheck(),
          ]);

        const data: DashboardData = {
          users: usersResponse.status === 'fulfilled' ? usersResponse.value.data?.data || [] : [],
          items: itemsResponse.status === 'fulfilled' ? itemsResponse.value.data?.data || [] : [],
          currentUser:
            currentUserResponse.status === 'fulfilled'
              ? currentUserResponse.value.data || null
              : null,
          systemHealth: healthResponse.status === 'fulfilled',
        };

        setState({ data, isLoading: false, error: null });
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to load dashboard data',
        });
      }
    };

    fetchDashboardData();
  }, []);

  const { data, isLoading, error } = state;

  console.log('data', data);

  if (error) {
    return (
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {data?.currentUser
            ? `Welcome back, ${data.currentUser.full_name || data.currentUser.email}!`
            : 'Welcome back!'}{' '}
          Here's what's happening with your application.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {/* Total Users */}
        <CardSmall
          isLoading={isLoading}
          title="Total Users"
          icon={Users}
          content={
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {data?.users.length ?? 0}
            </div>
          }
          status="Registered users"
        />

        {/* Total Items */}
        <CardSmall
          isLoading={isLoading}
          title="Total Items"
          icon={Package}
          content={
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {data?.items.length ?? 0}
            </div>
          }
          status="Items in database"
        />

        {/* Active User */}
        <CardSmall
          isLoading={isLoading}
          title="Current User"
          icon={Activity}
          content={
            <div className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {data?.currentUser?.full_name ?? data?.currentUser?.email ?? 'Unknown'}
            </div>
          }
          status="Logged in user"
        />

        {/* System Health */}
        <CardSmall
          isLoading={isLoading}
          title="System Health"
          icon={Settings}
          content={
            <div className="flex items-center space-x-2">
              {data?.systemHealth ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {data?.systemHealth ? 'Healthy' : 'Issues'}
              </span>
            </div>
          }
          status="API status"
        />
      </div>

      {/* Recent Activity and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Recent Users */}
        <List
          title="Recent Users"
          icon={Users}
          isLoading={isLoading}
          items={(data?.users ?? []).map((user) => ({
            icon: (
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {(user.full_name || user.email).charAt(0).toUpperCase()}
                </span>
              </div>
            ),
            content: (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user.full_name || user.email}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
              </div>
            ),
            status: (
              <Badge variant={user.is_active ? 'default' : 'secondary'}>
                {user.is_active ? 'Active' : 'Inactive'}
              </Badge>
            ),
          }))}
        />

        {/* Recent Items */}
        <List
          title="Recent Items"
          icon={Package}
          isLoading={isLoading}
          items={(data?.items ?? []).map((item) => ({
            icon: (
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Package className="h-4 w-4 text-white" />
              </div>
            ),
            content: (
              <>
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {item.description || 'No description'}
                </p>
              </>
            ),
            status: <div className="text-xs text-gray-400 flex-1 truncate">ID: {item.id}</div>,
          }))}
        />
      </div>

      {/* System Status */}
      <List
        title="System Status"
        icon={Settings}
        isLoading={isLoading}
        // Todo: fix this hardcoded array
        items={[
          {
            icon: (
              <>
                {data?.systemHealth ? (
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </>
            ),
            content: (
              <span className="text-sm font-medium text-gray-900 dark:text-white">API Server</span>
            ),
            status: (
              <div className="text-right">
                <div
                  className={`text-sm ${data?.systemHealth ? 'text-green-600' : 'text-red-600'}`}
                >
                  {data?.systemHealth ? 'Online' : 'Offline'}
                </div>
                <div className="text-xs text-gray-400">
                  {data?.systemHealth ? 'Responding' : 'Not responding'}
                </div>
              </div>
            ),
          },
          {
            icon: <div className="w-3 h-3 bg-green-500 rounded-full"></div>,
            content: (
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Authentication
              </span>
            ),
            status: (
              <div className="text-right">
                <div className="text-sm text-green-600">Active</div>
                <div className="text-xs text-gray-400">Token valid</div>
              </div>
            ),
          },
          {
            icon: <div className="w-3 h-3 bg-blue-500 rounded-full"></div>,
            content: (
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Data Loading
              </span>
            ),
            status: (
              <div className="text-right">
                <div className="text-sm text-blue-600">Complete</div>
                <div className="text-xs text-gray-400">
                  {data?.users.length || 0} users, {data?.items.length || 0} items
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default DashboardPage;
