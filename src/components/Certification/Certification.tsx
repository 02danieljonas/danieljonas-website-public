import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useWebsiteContext } from "../../context";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import CertificationCard from "./CertificationCard";

const Certification = () => {
    const { addSection, CertificationData } = useWebsiteContext();
    const certificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        addSection({ name: "Certification", ref: certificationRef });
    }, []);

    return (
        <SectionContainer>
            <Box ref={certificationRef} className={"certification"}>
                <SectionTitle title="Certification" />
                <Box className="certificationContainer">
                    {CertificationData.map(
                        ({ title, date, description, picture }, idx) => (
                            <CertificationCard
                                date={date}
                                key={idx}
                                title={title}
                                description={description}
                                picture={picture}
                                onClick={() => {
                                    console.warn("Set up modal");
                                }}
                            />
                        )
                    )}
                </Box>

                <Box className=""></Box>
            </Box>
        </SectionContainer>
    );
};

export default Certification;
