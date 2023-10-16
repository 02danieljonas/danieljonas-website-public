import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AboutMeData } from "../../assets/data/Controller";
import { useWebsiteContext } from "../../context";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutMe.scss";

const AboutMe = () => {
    const { addSection } = useWebsiteContext();

    const aboutMeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        addSection({ name: "About Me", ref: aboutMeRef });
    }, []);

    console.log(AboutMeData.leftTextBox);

    const [leftTextBox, setLeftTextBox] = useState<string>(
        AboutMeData.leftTextBox
    );

    const [rightTextBox, setRightTextBox] = useState<string>(
        AboutMeData.rightTextBox
    );

    return (
        <SectionContainer>
            <Box ref={aboutMeRef} pt="20px" className="about-me">
                <SectionTitle
                    title={AboutMeData.nameTextBox || "Daniel Jonas"}
                />

                <HStack margin={"40px"} spacing="20px">
                    <Box w="30vw">
                        <Text
                            align={"center"}
                            display={{ base: "none", lg: "block" }}
                        >
                            {leftTextBox}
                        </Text>
                    </Box>

                    <Image
                        src={AboutMeData.portrait}
                        backgroundColor={"brand.namedColors.purple"}
                        w="30vw"
                        rounded={"50%"}
                    />

                    <Box w="30vw">
                        <Text
                            align={"center"}
                            display={{ base: "none", lg: "block" }}
                        >
                            {rightTextBox}
                        </Text>
                    </Box>
                </HStack>

                <Box display={{ base: "block", lg: "none" }}>
                    <Center>
                        <Text align={"center"} maxW={"97vw"}>
                            {leftTextBox}
                        </Text>
                    </Center>

                    <Center>
                        <Box
                            width={"97vw"}
                            h="2px"
                            bgColor={"brand.namedColors.darkBlue"}
                        ></Box>
                    </Center>

                    <Center>
                        <Text align={"center"} maxW={"97vw"}>
                            {rightTextBox}
                        </Text>
                    </Center>

                    <br />
                </Box>

                <Center>
                    <Text>{AboutMeData.bottomTextBox}</Text>
                    <Text className="blink ">█</Text>
                </Center>
            </Box>
        </SectionContainer>
    );
};

export default AboutMe;
