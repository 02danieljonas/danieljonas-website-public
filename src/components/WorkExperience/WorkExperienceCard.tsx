import { Box, Center, Circle, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

type CardProps = {
    name: string;
    startDate: number;
    endDate?: number | "Current";
    description: string;
};

const WorkExperienceCard: React.FC<CardProps> = ({
    name,
    startDate,
    endDate = "Current",
    description,
}) => {
    const nameFormatted = name.toLocaleLowerCase();

    const dateFormat: {
        year: "numeric";
        month: "short";
    } = {
        year: "numeric",
        month: "short",
    };

    const calculateDate: (number: number | "Current") => string = (number) => {
        if (number === "Current") {
            return "Current";
        }
        return new Date(number * 1000).toLocaleDateString("en-US", dateFormat);
    };

    const textRef = useRef<HTMLParagraphElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    const [nameBoxHeight, setNameBoxHeight] = useState<number>(
        textRef.current?.clientHeight || 45
    );

    // useEffect(() => {
    //     console.log(textRef.current?.clientHeight);
    //     //! I think this is required
    // }, []);

    useEffect(() => {
        if (textRef && textRef.current && textRef.current.clientHeight) {
            setNameBoxHeight(textRef.current.clientHeight);
        }
    });

    return (
        <Center>
            <Box className="work" w={"80vw"} pt={"10px"}>
                <Flex>
                    <Box h={textRef.current?.clientHeight || "45px"}>
                        <Box
                            position={"relative"}
                            top="50%"
                            transform={"translateY(-50%)"}
                            // minW={"70px"}
                        >
                            <Text
                                w={"84px"}
                                align={"right"}
                                textAlign={"right"}
                            >
                                {calculateDate(startDate)}-
                            </Text>
                            <Text align={"left"}>{calculateDate(endDate)}</Text>
                        </Box>
                    </Box>
                    <Box
                        className="WECircle"
                        h={nameBoxHeight || "45px"}
                        ml={"20px"}
                        mr={"20px"}
                    >
                        <Circle
                            size={`12.85px`}
                            bg="brand.namedColors.cyan"
                            position={"relative"}
                            top="50%"
                            transform={"translateY(-50%)"}
                            zIndex={7}
                            ref={circleRef}
                            _after={{
                                content: '""',
                                height: "100vh",
                                position: "absolute",
                                width: "5px",
                                bgColor: "brand.namedColors.darkBlue",
                                zIndex: -1,
                                top: "100%",
                                left: "6.425",
                                marginLeft: "-2.5px",
                            }}
                        />
                    </Box>
                    <Box pb={"20px"}>
                        <VStack align={"left"}>
                            <Text
                                fontSize={"3xl"}
                                ref={textRef}
                                casing="capitalize"
                            >
                                {nameFormatted}
                            </Text>
                            <Text>{description}</Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </Center>
    );
};

export default WorkExperienceCard;
