import React from 'react';
import { Competitors, columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { ColumnFiltersState, SortingState, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";

interface CompetitorsTableProps {
    data: Competitors[];
    loading: boolean;
}

export function CompetitorsTable({ data, loading }: CompetitorsTableProps) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [filterValue, setFilterValue] = React.useState<string>("");

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    React.useEffect(() => {
        const nameColumn = table.getColumn("name");
        if (nameColumn) {
            nameColumn.setFilterValue(filterValue);
        }
    }, [filterValue, table]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredData = table.getFilteredRowModel().rows.map(row => row.original);

    return (
        <div className="container mx-auto py-10">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter Competitors"
                    value={filterValue}
                    onChange={(event) => setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
            </div>
            <DataTable columns={columns} data={filteredData} />
        </div>
    );
}

export default CompetitorsTable;
