import { ColumnDef } from "@tanstack/react-table"

export type Competitors = {
    id: string
    name: string
    website: string
    summary: string
    features: string[]
    uniqueVisitor: number
}

export const columns: ColumnDef<Competitors>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
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
        header: "Unique Visitor",
    },
]
