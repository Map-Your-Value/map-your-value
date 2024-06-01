import { useState } from 'react';
import './App.css';
import InputSearch from "@/components/inputSearch.tsx";
import CompetitorsTable from "@/components/competitors/competitors.tsx";
import {getCompetitorsData, getFeaturesData} from "@/api/response.tsx";
import {Competitors, Features} from "@/type.tsx";
import SelectFeatures from "@/components/selectFeatures.tsx";

function App() {
    const [showCompetitorsTable, setShowCompetitorsTable] = useState(false);
    const [showSelectFeatures, setShowSelectFeatures] = useState(false);
    const [features, setFeatures] = useState<Features[]>([]);
    const [competitors, setCompetitors] = useState<Competitors[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchFeatures = async () => {
        setLoading(true);
        const result = await getFeaturesData();
        setFeatures(result);
        setLoading(false);
        setShowSelectFeatures(false);
        setTimeout(() => {
            setShowSelectFeatures(true);
        }, 50);
    };

    const handleSearchCompetitors = async () => {
        setLoading(true);
        const result = await getCompetitorsData();
        setCompetitors(result);
        setLoading(false);
        setShowCompetitorsTable(false);
        setTimeout(() => {
            setShowCompetitorsTable(true);
        }, 50);
    };

    const handleValidated = async (selectedFeatures: Features[]) => {
        console.log("Selected features:", selectedFeatures);
        await handleSearchCompetitors();
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <InputSearch onSearch={handleSearchFeatures} />
                {showSelectFeatures && (
                    <div className="w-full animate-fadeIn">
                        <SelectFeatures onValidated={handleValidated} />
                    </div>
                )}

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