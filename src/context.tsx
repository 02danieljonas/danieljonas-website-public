import { createContext, useContext, useState } from "react";
import {
    AboutMeData,
    CertificationData,
    EducationData,
    ProjectsData,
    WorkExperienceData,
} from "./assets/data/Controller";

type Section = {
    name: string;
    ref?: React.RefObject<HTMLDivElement>;
};

interface WebsiteContextInterface {
    sections: Section[];
    addSection: (section: Section) => void;

    EducationData: {}[];
    AboutMeData: {};
    CertificationData: {
        title: string;
        date: number;
        description: string;
        picture: string;
    }[];
    ProjectsData: {
        title: string;
        completed: boolean;
        picture: string;
        link?: string;
        index: number;
        completion?: "Completed" | "Incomplete";
        description?: string;
    }[];
    WorkExperienceData: {
        name: string;
        startDate: number;
        endDate: number | undefined;
        description: string;
    }[];
}

const WebsiteContext = createContext<WebsiteContextInterface | null>(null);

export const WebsiteContextProvider: React.FC<any> = ({ children }) => {
    const [sections, setSections] = useState<Section[]>([]);

    //!Hello, the navbar links are being dupped because of StrictMode (and/or re-rendering) and they work properly in production

    function addSection(newSection: Section) {
        setSections((prevSections) => [...prevSections, { ...newSection }]);
    }

    const websiteValue: WebsiteContextInterface = {
        sections,
        addSection,
        EducationData,
        AboutMeData,
        CertificationData,
        ProjectsData,
        WorkExperienceData,
    };

    return (
        <WebsiteContext.Provider value={websiteValue}>
            <>{children}</>
        </WebsiteContext.Provider>
    );
};

export const useWebsiteContext = () =>
    useContext(WebsiteContext) as WebsiteContextInterface;
