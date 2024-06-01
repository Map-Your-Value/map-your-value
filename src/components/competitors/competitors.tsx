import React from 'react';
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { ColumnFiltersState, SortingState, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
import {Button} from "@/components/ui/button.tsx";
import {Competitors} from "@/type.tsx";

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
            <div className="flex items-center justify-between py-4">
                <h1 className="text-3xl">Data Analyse</h1>
                <div className="flex gap-2">
                    <Input
                        placeholder="Filter Competitors"
                        value={filterValue}
                        onChange={(event) => setFilterValue(event.target.value)}
                        className="max-w-sm"
                    />
                    <Button variant="outline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"
                             color="#3c3c43"
                             fill="none">
                            <path
                                d="M12 15L12 5M12 15C11.2998 15 9.99153 13.0057 9.5 12.5M12 15C12.7002 15 14.0085 13.0057 14.5 12.5"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 19H19.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    <Button variant="outline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#3c3c43"
                             fill="none">
                            <path d="M11.9959 12H12.0049" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M17.9998 12H18.0088" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M5.99981 12H6.00879" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={filteredData}/>
        </div>
    );
}

export default CompetitorsTable;
