import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useWebsiteContext } from "../../context";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
    const { addSection, WorkExperienceData } = useWebsiteContext();
    const workExperienceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        addSection({ name: "Work Experience", ref: workExperienceRef });
    }, []);
    return (
        <SectionContainer>
            <Box ref={workExperienceRef} className={"workExperience"}>
                <SectionTitle title="Work Experience" />
                <Box className="workExperienceContainer" overflow="hidden">
                    {WorkExperienceData.map(
                        ({ name, description, startDate, endDate }, idx) => (
                            <WorkExperienceCard
                                name={name}
                                key={idx}
                                description={description}
                                startDate={startDate}
                                endDate={endDate}
                            />
                        )
                    )}
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default WorkExperience;
