import { Box, Image, Text } from "@chakra-ui/react";
import { Categories, ProjectInfo } from "./types";

const ProjectCard = ({
    title,
    completion,
    selectedCategory,
    picture,
    setSelectedProject,
    id,
}: ProjectInfo & {
    selectedCategory: Categories;
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
    id: number;
}) => {
    return (
        <Box
            w="250px"
            pb={"40px"}
            display={
                selectedCategory.toLowerCase() == completion?.toLowerCase() ||
                selectedCategory == "All"
                    ? "block"
                    : { base: "block", md: "none" }
            }
            onClick={() => setSelectedProject(id)
            }
        >
            <Text fontSize={"2xl"} textAlign={"center"} wordBreak="keep-all">
                {title}
            </Text>
            <Box
                w={"230px"}
                h="280px"
                bgColor={"grey"}
                borderRadius={"10px"}
                overflow="hidden"
            >
                <Image
                    src={picture}
                    position={"relative"}
                    top="50%"
                    transform={"translateY(-50%)"}
                />
            </Box>
        </Box>
    );
};

export default ProjectCard;
