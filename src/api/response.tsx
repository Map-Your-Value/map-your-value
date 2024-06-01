import {Configuration, DefaultApi} from '../../api';
import {SearchCompetitorCompetitorPostRequest} from "../../api";
import {Competitors, Features} from "@/type.tsx";

const api = new DefaultApi(new Configuration({ basePath: 'http://127.0.0.1:8000' }));

export async function getCompetitorsData(search: string): Promise<Competitors|null> {
    try {
        const requestData: SearchCompetitorCompetitorPostRequest = { search };
        return await api.searchCompetitorCompetitorPost(requestData);
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
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
