import { FC } from 'react';

import { CheckCircle, Settings, XCircle } from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';

import { UtilsService } from '@/client/sdk.gen';

const CardSystemHealth: FC = async () => {
  const result = await UtilsService.healthCheck();
  const systemHealth = result.data ?? false;

  return (
    <CardSmall
      title="System Health"
      status="API status"
      icon={Settings}
      content={
        <div className="flex items-center space-x-2">
          {systemHealth ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500" />
          )}
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            {systemHealth ? 'Healthy' : 'Issues'}
          </span>
        </div>
      }
    />
  );
};

export default CardSystemHealth;
