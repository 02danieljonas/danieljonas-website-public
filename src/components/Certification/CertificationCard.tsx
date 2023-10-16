import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

const CertificationCard = ({
    title,
    date,
    description,
    picture,
    onClick,
}: {
    title: string;
    date: number;
    description: string;
    picture: string;
    onClick: () => void;
}) => {
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
    return (
        <Center>
            <Flex
                w={"80vw"}
                bgColor={"brand.namedColors.darkBlue"}
                color={"brand.namedColors.white"}
                borderRadius={"25px"}
                overflow={"hidden"}
                mt={"20px"}
            >
                <Box bgColor={"brand.namedColors.cyan"} w="16vw" p={"10px"}>
                    <Box
                        position={"relative"}
                        top="50%"
                        transform={"translateY(-50%)"}
                    >
                        <Image
                            src={picture}
                            _hover={{ transform: "scale(1.1)" }}
                            transitionDuration=".2s"
                            cursor="pointer"
                            onClick={onClick}
                        />
                    </Box>
                </Box>
                <VStack align={"left"} p={"20px"} gap={0} w="64vw">
                    <Text fontSize={"2xl"}>{title}</Text>
                    <Text fontSize={"md"}>{calculateDate(date)}</Text>
                    <Text>{description}</Text>
                </VStack>
            </Flex>
        </Center>
    );
};

export default CertificationCard;
