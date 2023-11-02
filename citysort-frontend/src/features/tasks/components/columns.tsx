'use client';
// Add or edit columns here


import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
// import { Checkbox } from '@/components/ui/checkbox';

import { labels, priorities, statuses } from '../data/data';
import { Task } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
// import { DataTableRowActions } from './data-table-row-actions';

export const columns: ColumnDef<Task>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Score" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label); //match the data with the label

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('title')}
          </span>
          {label && <Badge variant="custom">{label.label}</Badge>}
        </div>
      );
    },
  },
  {
    accessorKey: 'profile',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City Profile" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('profile')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'hra',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="HRA classification" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('hra')
      );

      if (!priority) {
        return null;
      }

      let color = '';
      if (priority.value === 'low') {
        color = 'red';
      } else if (priority.value === 'medium') {
        color = 'blue';
      } else if (priority.value === 'high') {
        color = 'green';
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span style={{ color }}>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
