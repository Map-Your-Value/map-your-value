import { useState } from 'react';
import './App.css';
import InputSearch from "@/components/inputSearch.tsx";
import CompetitorsTable from "@/components/competitors/competitors.tsx";
import { getCompetitorsData } from "@/api/response.tsx";
import { Competitors } from "@/type.tsx";

export interface CompetitorsResponse {
    competitors: Competitors[];
}

function App() {
    const [showCompetitorsTable, setShowCompetitorsTable] = useState(false);
    const [competitors, setCompetitors] = useState<Competitors[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchCompetitors = async (search: string) => {
        setLoading(true);
        try {
            const result : CompetitorsResponse = await getCompetitorsData(search);
            console.log('Result from getCompetitorsData:', result);
            if (result && result.competitors) {
                setCompetitors(result.competitors);
            } else {
                console.error('Unexpected result structure:', result);
            }
        } catch (error) {
            console.error('Error handling search competitors:', error);
        } finally {
            setLoading(false);
            setShowCompetitorsTable(false);
            setTimeout(() => {
                setShowCompetitorsTable(true);
            }, 50);
        }
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <InputSearch onSearch={handleSearchCompetitors} />

                {showCompetitorsTable && (
                    <div className="w-full animate-fadeIn">
                        <CompetitorsTable data={competitors} loading={loading} />
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
