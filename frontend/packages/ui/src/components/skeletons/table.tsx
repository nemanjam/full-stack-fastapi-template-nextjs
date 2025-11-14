import { Skeleton } from '@workspace/ui/components/ui/skeleton';

import type { FC } from 'react';

export const TableRowSkeleton: FC = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-4 w-16" />
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-4 w-20" />
  </div>
);

const TableHeaderSkeleton: FC = () => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center space-x-3">
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-4 w-32" />
    </div>
    <Skeleton className="h-4 w-16" />
  </div>
);

interface TableSkeletonProps {
  count?: number;
  showHeader?: boolean;
}

export const TableSkeleton: FC<TableSkeletonProps> = ({ count = 1, showHeader = true }) => {
  return (
    <div className="space-y-4 border shadow-sm bg-white rounded-md p-4">
      {showHeader && <TableHeaderSkeleton />}
      {Array.from({ length: count }).map((_, i) => (
        <TableRowSkeleton key={i} />
      ))}
    </div>
  );
};

export default TableSkeleton;
