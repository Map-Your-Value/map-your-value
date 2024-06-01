import {Competitors, Features} from "@/type.tsx";
import { useEffect, useState } from 'react';
import { DefaultApi, Configuration, RankCompetitorList } from '../../api';
import { SearchCompetitorCompetitorPostRequest } from "../../api/apis/DefaultApi";

const api = new DefaultApi(new Configuration({ basePath: 'http://127.0.0.1:8000' }));


export async function getCompetitorsData(search: string): Promise<any> { // RankCompetitorList[] the right return type
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const requestData: SearchCompetitorCompetitorPostRequest = { search };
            const response = await api.searchCompetitorCompetitorPost(requestData); // Replace with your actual endpoint method
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);
    console.log(data)
    return data;

/*
{
  "search": "www.quivr.com",
  "ourCompany": {
    "id": 0,
    "name": "quivr",
    "website": "www.quivr.com",
    "summary": "summary of quivr here",
    "features": [
      "features1",
      "features2"
    ],
    "uniqueVisitor": 1000000
  },
  "endResult": {
    "competitors": [
      {
        "id": 1,
        "name": "parcha",
        "website": "www.parcha.com",
        "summary": "summary of parcha here",
        "features": [
          "features1",
          "features2"
        ],
        "uniqueVisitor": 1000
      },
      {
        "id": 2,
        "name": "simular",
        "website": "www.simular.ai/",
        "summary": "summary of simular here",
        "features": [
          "features1",
          "features2"
        ],
        "uniqueVisitor": 500
      }
    ]
  }
}


*/


/*
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
*/

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
