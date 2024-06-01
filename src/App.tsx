import { useState } from 'react';
import './App.css';
import Header from "@/layout/header.tsx";
import InputSearch from "@/components/inputSearch.tsx";
import { Competitors } from "@/components/competitors/columns.tsx";
import CompetitorsTable from "@/components/competitors/competitors.tsx";

async function getData(): Promise<Competitors[]> {
    return [
        {
            id: "1",
            name: "Competitor One",
            website: "https://www.competitor1.com",
            summary: "This is the summary of Competitor One.",
            features: ["Feature 1", "Feature 2"],
            uniqueVisitor: 1000,
        },
        {
            id: "2",
            name: "Competitor Two",
            website: "https://www.competitor2.com",
            summary: "This is the summary of Competitor Two.",
            features: ["Feature 3", "Feature 4"],
            uniqueVisitor: 2000,
        },
        {
            id: "3",
            name: "Competitor Three",
            website: "https://www.competitor3.com",
            summary: "This is the summary of Competitor Three.",
            features: ["Feature 5", "Feature 6"],
            uniqueVisitor: 3000,
        },
    ];
}

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
            <Header />
            <div className="h-screen flex flex-col justify-center items-center">
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
