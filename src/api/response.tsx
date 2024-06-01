import {Competitors, Features} from "@/type.tsx";

export async function getCompetitorsData(): Promise<Competitors[]> {
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
        {
            id: "6",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
        },
        {
            id: "7",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
        },
        {
            id: "8",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
        },
        {
            id: "9",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
        },
        {
            id: "10",
            name: "CreativeFlow",
            website: "https://www.creativeflow.com",
            summary: "CreativeFlow is an all-in-one design platform that simplifies the creation of graphics, presentations, and more.",
            features: ["Presentation maker", "Video editor", "Custom animations", "Real-time collaboration"],
            uniqueVisitor: 450000,
        },
    ];
}

export async function getFeaturesData(): Promise<Features[]> {
    return [
        { feature: "Responsive Design" },
        { feature: "SEO Optimization" },
        { feature: "Live Chat Support" },
        { feature: "Newsletter Signup" },
        { feature: "Social Media Integration" },
        { feature: "Contact Form" },
        { feature: "Blog" },
        { feature: "About Us Page" },
        { feature: "Calls to Action" },
        { feature: "Search Functionality" }
    ];
}
