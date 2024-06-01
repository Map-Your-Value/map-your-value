import { ColumnDef } from "@tanstack/react-table";
import {Competitors} from "@/type.tsx";

export const columns: ColumnDef<Competitors>[] = [
    {
        accessorKey: "id",
        header: "ID",
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
];
