import { Fragment } from 'react';

import { Edit, MoreHorizontal, Shield, ShieldCheck, Trash2, Users } from 'lucide-react';

import TableSkeleton from '@workspace/ui/components/skeletons/table';
import { Badge } from '@workspace/ui/components/ui/badge';
import { Button } from '@workspace/ui/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@workspace/ui/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@workspace/ui/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@workspace/ui/components/ui/table';

import { Options, UsersService } from '@/client/sdk.gen';

import type { UserPublic, UsersReadUsersData } from '@/client/types.gen';
import type { FC } from 'react';

interface TableAdminHeaderProps {
  title: string;
}

const TableAdminHeader: FC<TableAdminHeaderProps> = ({ title }) => (
  <CardHeader>
    <CardTitle className="flex items-center space-x-2">
      <Users className="h-5 w-5" />
      <span>{title}</span>
    </CardTitle>
  </CardHeader>
);

interface TableAdminContentProps {
  currentUser: UserPublic | undefined;
  users: UserPublic[];
}

const TableAdminContent: FC<TableAdminContentProps> = async ({ currentUser, users }) => {
  // Todo: extract dropdown in client component
  // Todo: server actions
  const handleEditUser = (user: UserPublic) => {};
  const handleDeleteUser = (user: UserPublic) => {};

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <Fragment key={user.id}>
            <TableCell className="font-mono text-sm">{user.id}</TableCell>
            <TableCell className="font-medium">
              {user.full_name || <span className="italic text-gray-400">No name</span>}
            </TableCell>
            <TableCell className="text-gray-600 dark:text-gray-400">{user.email}</TableCell>
            <TableCell>
              <Badge variant={user.is_superuser ? 'default' : 'secondary'}>
                {user.is_superuser ? (
                  <>
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    Admin
                  </>
                ) : (
                  <>
                    <Shield className="h-3 w-3 mr-1" />
                    User
                  </>
                )}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditUser(user)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDeleteUser(user)}
                    className="text-red-600"
                    disabled={currentUser?.id === user.id}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

interface TableAdminPaginationProps {
  currentPage: number;
  totalPages: number;
}

const TableAdminPagination: FC<TableAdminPaginationProps> = ({ currentPage = 1, totalPages }) => {
  // Todo: route param for ssr dashboard/admin/[currentPage]/page.tsx

  // links?
  const handlePrevious = () => currentPage > 1 && fetchUsers(currentPage - 1);
  const handleNext = () => currentPage < totalPages && fetchUsers(currentPage + 1);

  return (
    <div className="flex justify-center mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            if (page === currentPage) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink isActive>{page}</PaginationLink>
                </PaginationItem>
              );
            }
            return (
              <PaginationItem key={page}>
                <PaginationLink onClick={() => fetchUsers(page)} className="cursor-pointer">
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

// Todo: add to config constants
const PER_PAGE = 3 as const;

export interface TableAdminProps {
  currentPage: number;
}

const TableAdmin: FC<TableAdminProps> = async ({ currentPage }) => {
  const readUsersOptions: Options<UsersReadUsersData, false> = {
    query: {
      skip: (currentPage - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
  };

  const [currentUserResult, usersResult] = await Promise.all([
    UsersService.readUserMe(),
    UsersService.readUsers(readUsersOptions),
  ]);

  const currentUser = currentUserResult.data;
  const users = usersResult.data?.data ?? [];
  const usersCount = usersResult.data?.count ?? 0; // total users, not page

  const totalPages = Math.ceil(usersCount / PER_PAGE);

  return (
    <Card>
      <TableAdminHeader title={`Users (${users.length})`} />
      <CardContent>
        <TableAdminContent currentUser={currentUser} users={users} />
        <TableAdminPagination currentPage={currentPage} totalPages={totalPages} />
      </CardContent>
    </Card>
  );
};

export default TableAdmin;
