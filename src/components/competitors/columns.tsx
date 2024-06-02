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
        accessorKey: "Competitor",
        header: "Competitor",
        cell: info => info.getValue(),
        enableSorting: true,
    },
    {
        accessorKey: "Descriptive_summary",
        header: "Descriptive Summary",
    },
    {
        accessorKey: "Strengths",
        header: "Strengths",
        cell: info => (Array.isArray(info.getValue()) ? (info.getValue() as string[]).join(", ") : info.getValue()),
    },
    {
        accessorKey: "Weaknesses",
        header: "Weaknesses",
        cell: info => (Array.isArray(info.getValue()) ? (info.getValue() as string[]).join(", ") : info.getValue()),
    },
    {
        accessorKey: "Proximity_Score",
        header: "Proximity Score",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "Proximity_Explanation",
        header: "Proximity Explanation",
    },
    {
        accessorKey: "Crunchbase_Link",
        header: "Crunchbase Link",
        cell: info => {
            const crunchbaseLink = info.getValue() as string;
            return (
                <a href={crunchbaseLink} className="underline" target="_blank" rel="noopener noreferrer">
                    Crunchbase
                </a>
            );
        },
    },
];
