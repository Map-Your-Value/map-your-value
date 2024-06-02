import { useState } from 'react';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    PaginationState,
} from "@tanstack/react-table";
import NameIcon from '@/assets/name.svg';
import WebsiteIcon from '@/assets/website.svg';
import SummaryIcon from '@/assets/summary.svg';
import MeasureIcon from '@/assets/measure.svg';
import FeatureIcon from '@/assets/feature.svg';
import VisitorIcon from '@/assets/visitor.svg';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button.tsx";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const icons = {
    name: NameIcon,
    website: WebsiteIcon,
    summary: SummaryIcon,
    cost: MeasureIcon,
    uniqueVisitor: VisitorIcon,
    features: FeatureIcon,
};

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        pageCount: Math.ceil(data.length / pagination.pageSize),
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
    });

    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-gray text-grayText">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header, index) => {
                                    const Icon = icons[header.column.id as keyof typeof icons] || null;
                                    return (
                                        <TableHead
                                            key={header.id}
                                            className={index !== 0 ? "border-l border-gray-300" : ""}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div className="flex items-center">
                                                    {Icon && <img src={Icon} alt="" className="mr-2 w-4 h-4" />}
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </div>
                                            )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="bg-white">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell, index) => (
                                        <TableCell
                                            key={cell.id}
                                            className={index !== 0 ? "border-l border-gray-300" : ""}
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <span>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </>
    );
}
