import { ColumnDef } from "@tanstack/react-table";
import { Competitors } from "@/type.tsx";

export const columns: ColumnDef<Competitors>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: info => info.getValue(),
        enableSorting: true,
    },
    {
        accessorKey: "website",
        header: "Website",
    },
    {
        accessorKey: "summary",
        header: "Summary",
    },
    {
        accessorKey: "features",
        header: "Features",
        cell: info => (info.getValue() as string[]).join(", "),
    },
    {
        accessorKey: "uniqueVisitor",
        header: "Visitor (/month)",
    },
    {
        accessorKey: "cost",
        header: "Measure",
        cell: info => {
            const value = info.getValue() as number;
            return (
                <div className="w-full">
                    <div className="w-full h-2 bg-greenBg rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: `${value*100/5}%` }}></div>
                    </div>
                </div>
            );
        },
    },
];
