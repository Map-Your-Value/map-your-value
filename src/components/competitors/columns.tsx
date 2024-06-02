import { ColumnDef } from "@tanstack/react-table";
import { Competitors } from "@/type.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";

export const columns: ColumnDef<Competitors>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex justify-center items-center h-full">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="pr-0">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: info => info.getValue(),
        enableSorting: true,
    },
    {
        accessorKey: "website",
        header: "Website",
        cell: info => {
            const website = info.getValue() as string;
            return (
                <a href={website} className="underline" target="_blank" rel="noopener noreferrer">
                    {website}
                </a>
            );
        },
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
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: `${value * 100 / 5}%` }}></div>
                    </div>
                </div>
            );
        },
    },
];
