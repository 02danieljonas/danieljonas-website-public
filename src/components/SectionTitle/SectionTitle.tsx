import { Center, Heading } from "@chakra-ui/react";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <Center>
            <Heading
                fontSize={{ base: "4xl", sm: "6xl" }}
                textAlign="center"
                pb={"20px"}
                pt={"20px"}
            >
                {title}
            </Heading>
        </Center>
    );
};

export default SectionTitle;
