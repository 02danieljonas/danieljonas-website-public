import { InfoIcon } from "@chakra-ui/icons";
import {
    Box,
    Divider,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

const Info = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box zIndex={99999}>
            <Box
                pos={"fixed"}
                bottom={"5"}
                right={"5"}
                onClick={onOpen}
                cursor="pointer"
                zIndex={99999}
            >
                <InfoIcon
                    color={"brand.namedColors.pink"}
                    width={"48px"}
                    height={"48px"}
                    zIndex={99999}
                />
            </Box>

            {/* <ModalOverlay /> */}
            <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />

                <ModalContent bgColor={"brand.namedColors.pink"} color="white">
                    <ModalHeader>
                        <Heading textAlign={"center"}>
                            Info on ${"{"}currentSection{"}"}
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <Text>Custom backdrop filters!</Text>
                        <br />
                        <Text>This website has been visited **X** times</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Info;
