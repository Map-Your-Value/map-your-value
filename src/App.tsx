import { useState } from 'react';
import './App.css';
import InputSearch from "@/components/inputSearch.tsx";
import { Competitors } from "@/components/competitors/columns.tsx";
import CompetitorsTable from "@/components/competitors/competitors.tsx";

async function getData(): Promise<Competitors[]> {
    return [
        {
            id: "1",
            name: "DesignPro",
            website: "https://www.designpro.com",
            summary: "DesignPro is a leading online design platform offering a wide range of templates and design tools for creating stunning visuals.",
            features: ["Drag-and-drop editor", "Customizable templates", "Stock photo library", "Collaboration tools"],
            uniqueVisitor: 500000,
        },
        {
            id: "2",
            name: "ArtStudio",
            website: "https://www.artstudio.com",
            summary: "ArtStudio provides a comprehensive suite of design tools tailored for artists and creative professionals.",
            features: ["Advanced drawing tools", "Layer management", "Brush customization", "Vector editing"],
            uniqueVisitor: 300000,
        },
        {
            id: "3",
            name: "GraphicGenie",
            website: "https://www.graphicgenie.com",
            summary: "GraphicGenie helps users create beautiful graphics and marketing materials with ease and efficiency.",
            features: ["Pre-made templates", "Branding kit", "Social media integration", "Export options"],
            uniqueVisitor: 400000,
        },
        {
            id: "4",
            name: "VisualCraft",
            website: "https://www.visualcraft.com",
            summary: "VisualCraft offers powerful design solutions for businesses and individuals looking to create professional-grade visuals.",
            features: ["Template library", "Custom fonts", "Image editing", "Team collaboration"],
            uniqueVisitor: 350000,
        },
        {
            id: "5",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
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
