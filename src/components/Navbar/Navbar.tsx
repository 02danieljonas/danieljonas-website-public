import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { useWebsiteContext } from "../../context";
import "./Navbar.scss";
import NavLink from "./NavLink";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { sections } = useWebsiteContext();
    const [spin, setSpin] = useState(false);


    return (
        <Box className="navbar" position={"sticky"} top="0" h={"70px"}>
            <Box overflow={"hidden"} h="100%" w="100%">
                <div className="stars" />
                <div className="stars2" />
                <div className="stars3" />
            </Box>
            <Center>
                <HStack
                    pos={"absolute"}
                    top={"50%"}
                    transform={"translateY(-50%)"}
                    // h={16}
                    // alignItems={"center"}
                    justifyContent={"space-between"}
                    // alignContent="center"
                    mt={0}
                    pt={0}
                    w={"99%"}
                >
                    {/* Logo */}
                    <Box
                        width={"60px"}
                        onClick={() => {
                            scrollTo(0, 0);
                        }}
                        cursor="pointer"
                    >
                        <Image src={Logo} alt="Page Logo" objectFit="contain" />
                    </Box>

                    <Spacer />

                    {/* NavLinks spread out */}
                    <HStack
                        as={"nav"}
                        spacing={3}
                        display={{ base: "none", lg: "flex" }}
                    >
                        {sections.map((section, i) => (
                            <NavLink
                                key={i}
                                name={section.name}
                                refObject={section.ref}
                            />
                        ))}
                    </HStack>

                    {/* HamburgerIcon */}
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ lg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <Flex>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            ></MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Center>

            {isOpen ? (
                <Box pb={4} display={{ lg: "none" }} overflow="auto" bgColor={"brand.namedColors.black"}>
                    <Stack as={"nav"} spacing={4} mt="10px" marginInline={"2vw"}>
                        {sections.map((section, i) => (
                            <NavLink
                                key={i}
                                name={section.name}
                                refObject={section.ref}
                                onClose={onClose}
                            />
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
