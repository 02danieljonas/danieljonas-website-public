import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import "swiper/css";
import { EducationData as ED } from "../../assets/data/Controller";
import { useWebsiteContext } from "../../context";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.scss";
import Slides from "./Slides";
import { EducationInfo } from "./types";

const Education = () => {
    const { addSection } = useWebsiteContext();
    const educationRef = useRef<HTMLDivElement>(null);

    const educationData = ED.sort(
        (a, b) => b.endDate - a.endDate
    ) as EducationInfo[];

    useEffect(() => {
        addSection({ name: "Education", ref: educationRef });
    }, []);

    return (
        <SectionContainer>
            <Box ref={educationRef} className={"education"}>
                <SectionTitle title="Education" />
                <Box className="educationContainer">
                    <Slides educationData={educationData} />
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default Education;
