import React from 'react';
import { Competitors, columns } from "./columns";
import { DataTable } from "./data-table";

interface CompetitorsTableProps {
    data: Competitors[];
    loading: boolean;
}

const CompetitorsTable: React.FC<CompetitorsTableProps> = ({ data, loading }) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default CompetitorsTable;
