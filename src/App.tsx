import { useState } from 'react';
import './App.css';
import InputSearch from "@/components/inputSearch.tsx";
import { Competitors } from "@/components/competitors/columns.tsx";
import CompetitorsTable from "@/components/competitors/competitors.tsx";
import {getData} from "@/api/response.tsx";

function App() {
    const [showDemoPage, setShowDemoPage] = useState(false);
    const [data, setData] = useState<Competitors[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = async () => {
        setLoading(true);
        const result = await getData();
        setData(result);
        setLoading(false);
        setShowDemoPage(false);
        setTimeout(() => {
            setShowDemoPage(true);
        }, 50);
    };

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <InputSearch onSearch={handleSearch} />
                {showDemoPage && (
                    <div className="w-full animate-fadeIn">
                        <CompetitorsTable data={data} loading={loading} />
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
