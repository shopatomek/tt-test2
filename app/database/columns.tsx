"use client";

import { Button } from "@/components/ui/button";
import { Data } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Data>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "ID",
  },
  {
    header: "tiktokId",
    accessorKey: "tiktokId",
  },
  {
    header: "createTime",
    accessorKey: "createTime",
    cell: ({ row }) => {
      const createTime = row.getValue("createTime");
      const formatted = new Date(createTime as string).toLocaleDateString();
      return <div>{formatted}</div>;
    },
  },
  {
    header: "diggCount",
    accessorKey: "diggCount",
  },
  {
    header: "playCount",
    accessorKey: "playCount",
  },
  {
    header: "@uniqueId",
    accessorKey: "uniqueId",
    cell: ({ row }) => {
      const createTime = row.getValue("createTime");
      const formatted = `@${row.getValue("uniqueId")}`;
      return <div className="font-bold">{formatted}</div>;
    },
  },
  {
    header: "nickname",
    accessorKey: "nickname",
  },
  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          followerCount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "followerCount",
  },
  {
    header: ({ column }) => {
      return (
        <button
          className="flex"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          heartCount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    accessorKey: "heartCount",
  },
  {
    header: "videoCount",
    accessorKey: "videoCount",
  },
  {
    header: "itdescription",
    accessorKey: "itdescription",
  },
  {
    header: "tags",
    accessorKey: "tags",
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      const uniqueId = data.uniqueId;
      const itdescription = data.itdescription;
      const tags = data.tags;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-6 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <hr />
            <br />
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(uniqueId);
              }}
            >
              Copy uniqueId
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(itdescription);
              }}
            >
              Copy itdescription
            </DropdownMenuItem>
            <hr />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tags);
              }}
            >
              Copy Tags
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
