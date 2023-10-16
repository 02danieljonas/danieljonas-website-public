import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useWebsiteContext } from "../../context";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectText from "./ProjectText";
import { Categories } from "./types";
import Modal from "./Modal";
const Projects = () => {
    const { addSection, ProjectsData } = useWebsiteContext();
    const projectsRef = useRef<HTMLDivElement>(null);

    ProjectsData.forEach((e) => {
        if (e.completed) {
            e.completion = "Completed";
        } else {
            e.completion = "Incomplete";
        }
        console.log(e.completed);
    });

    ProjectsData.sort((a, b) => a.index - b.index);

    useEffect(() => {
        addSection({ name: "Projects", ref: projectsRef });
    }, []);

    const [selectedCategory, setSelectedCategory] = useState<Categories>("All");
    const categories: Categories[] = ["All", "Completed", "Incomplete"];

    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <SectionContainer>
            {selectedProject != null ? (
                <Modal
                    project={ProjectsData[selectedProject]}
                    setSelectedProject={setSelectedProject}
                />
            ) : (
                <></>
            )}
            <Box ref={projectsRef} className="projects">
                <SectionTitle title="Projects" />
                <Center>
                    <Box
                        className="containerForProjects"
                        bg={"brand.namedColors.darkBlue"}
                        color={"brand.namedColors.cyan"}
                        w="80vw"
                        borderRadius={"20px"}
                        pt="10px"
                    >
                        <Center>
                            <HStack
                                className="projectsNav"
                                w={"95%"}
                                color={"brand.namedColors.darkBlue"}
                                gap={0}
                                spacing={0}
                                display={{ base: "none", md: "flex" }}
                            >
                                {categories.map((e, idx) => (
                                    <ProjectText
                                        text={e}
                                        key={idx}
                                        positionMultiplier={idx}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={
                                            setSelectedCategory
                                        }
                                    />
                                ))}
                            </HStack>
                        </Center>
                        <Center>
                            <Box
                                display={{ base: "block", md: "none" }}
                                color={"brand.namedColors.darkBlue"}
                            >
                                {
                                    <ProjectText
                                        text={"All"}
                                        positionMultiplier={0}
                                        selectedCategory={"All"}
                                        setSelectedCategory={
                                            setSelectedCategory
                                        }
                                    />
                                }
                            </Box>
                        </Center>
                        <Center>
                            <Box
                                className="line"
                                position={"relative"}
                                zIndex="9"
                                top="-5px"
                                bgColor={"brand.namedColors.pink"}
                                borderRadius={"50px"}
                                h="5px"
                                w={"99%"}
                            />
                        </Center>
                        <Flex
                            wrap={"wrap"}
                            p="10px 5vw"
                            justifyContent={"center"}
                        >
                            {ProjectsData.map(
                                ({ title, completion, picture }, idx) => (
                                    <ProjectCard
                                        setSelectedProject={setSelectedProject}
                                        title={title}
                                        key={idx}
                                        id={idx}
                                        completion={completion}
                                        selectedCategory={selectedCategory}
                                        picture={picture}
                                    />
                                )
                            )}
                        </Flex>
                    </Box>
                </Center>
            </Box>
        </SectionContainer>
    );
};

export default Projects;
