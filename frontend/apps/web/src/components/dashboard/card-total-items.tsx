import { FC } from 'react';

import { Package } from 'lucide-react';

import CardSmall from '@workspace/ui/components/card-small';

import { ItemsService } from '@/client/sdk.gen';

const CardTotalItems: FC = async () => {
  const result = await ItemsService.readItems();
  const count = result.data?.count ?? 0;

  return (
    <CardSmall
      title="Total Items"
      status="Items in database"
      icon={Package}
      content={<div className="text-2xl font-bold text-gray-900 dark:text-white">{count}</div>}
    />
  );
};

export default CardTotalItems;
