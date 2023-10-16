import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Divider,
    Flex,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { ProjectInfo } from "./types";

const Modal = ({
    project,
    setSelectedProject,
}: {
    project: ProjectInfo;
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
    console.log(project);

    return (
        <Box
            top="0"
            left="0"
            position="fixed"
            zIndex={9999}
            height="100vh"
            width="100vw"
            color={"white"}
        >
            <Box
                onClick={() => setSelectedProject(null)}
                position="fixed"
                width={"100%"}
                height={"100%"}
                backgroundColor="rgba(0,0,0,0.5)"
                cursor="pointer"
            />
            <Box
                zIndex={99999}
                bgColor={"brand.namedColors.pink"}
                width={"80vw"}
                height={""}
                position={"relative"}
                top="50%"
                left="50%"
                transform={"translate(-50%, -50%)"}
            >
                <Center>
                    <Text fontSize={"2xl"}>{project.title}</Text>
                </Center>
                <Box
                    className="line"
                    bgColor={"white"}
                    h="2px"
                    w={"100%"}
                    mb="1%"
                />
                <Flex>
                    <Box width={"50%"}>
                        <Center>
                            <Image src={project.picture} p="20px" pb={"0"} />
                        </Center>
                        <Center pt={"10px"} pb="20px">
                            <Link
                                display={project.link ? "block" : "none"}
                                href={project.link}
                                isExternal
                            >
                                Link <ExternalLinkIcon />
                            </Link>
                        </Center>
                    </Box>
                    <Box width={"50%"} p="20px">
                        <Text fontSize={{ base: "xs", sm: "sm", md: "md" }}>
                            {project.description}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Modal;
