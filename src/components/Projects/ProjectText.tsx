import { Categories } from "./types";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ProjectText = ({
    text,
    selectedCategory,
    setSelectedCategory,
    positionMultiplier,
}: {
    text: Categories;
    selectedCategory: Categories;
    setSelectedCategory: React.Dispatch<React.SetStateAction<Categories>>;
    positionMultiplier: number;
}) => {
    return (
        <Box
            position={"relative"}
            left={-5 * positionMultiplier}
            className={`trapezoid ${
                selectedCategory == text ? "selected" : "notSelected"
            }`}
            onClick={() => {
                setSelectedCategory(text);
            }}
            zIndex={selectedCategory == text ? 3 : 2}
            cursor="pointer"
            pl="20px"
            pr="20px"
            verticalAlign={"middle"}
            h={0}
            borderRight={"25px solid transparent"}
            borderLeft={"25px solid transparent"}
            borderBottom={`50px solid #${
                selectedCategory == text ? "4" : "b"
            }0ffff`}
        >
            <Text
                color={"transparent"}
                userSelect="none"
                pointerEvents={"none"}
                visibility="hidden"
            >
                {text}
            </Text>
            <Text top="50%" transform={"translateY(-50%)"}>
                {text}
            </Text>
        </Box>
    );
};

export default ProjectText;
