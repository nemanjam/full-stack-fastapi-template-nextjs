import { ElementType, FC, ReactNode } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/ui/card';
import { Skeleton } from '@workspace/ui/components/ui/skeleton';

export interface Props {
  title: string;
  icon: ElementType;
  items: ListItemProps[];
  isLoading?: boolean;
}

const List: FC<Props> = ({ title, icon: Icon, items, isLoading }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="h-5 w-5" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {isLoading && [...Array(3)].map((_, index) => <ListItemSkeleton key={index} />)}

        {!isLoading && items.length > 0 ? (
          items.slice(0, 5).map((item, index) => <ListItem key={index} {...item} />)
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
            No items found
          </p>
        )}
      </div>
    </CardContent>
  </Card>
);

export interface ListItemProps {
  icon: ReactNode;
  content: ReactNode;
  status: ReactNode;
  isLoading?: boolean;
}

export const ListItem: FC<ListItemProps> = ({ icon, content, status, isLoading }) =>
  isLoading ? (
    <ListItemSkeleton />
  ) : (
    <div className="flex items-center space-x-4">
      {icon}
      <div className="flex-1 min-w-0">{content}</div>
      {/* Todo: fix this, add wrapper div */}
      {status}
    </div>
  );

const ListItemSkeleton: FC = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <Skeleton className="h-3 w-3 rounded-full" />
      <Skeleton className="h-4 w-24" />
    </div>
    <div className="text-right">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-3 w-12 mt-1" />
    </div>
  </div>
);

export default List;
