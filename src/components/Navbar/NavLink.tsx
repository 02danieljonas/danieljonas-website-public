import { Link, Text } from "@chakra-ui/react";

const NavLink = ({
    name,
    refObject,
    onClose,
}: {
    name: String;
    refObject?: React.RefObject<HTMLDivElement>;
    onClose?: () => void;
}) => (
    <Link
        px={"25px"}
        py={"15px"}
        bgColor="white"
        rounded={"md"}
        _hover={onClose ? {} : { transform: "scale(1.1)" }}
        fontSize={"xl"}
        color={"brand.namedColors.cyan"}
        minW="max-content"
        onClick={() => {
            if (onClose) {
                onClose();
            }
            if (
                typeof refObject?.current?.getBoundingClientRect().top ===
                "number"
            ) {
                window.scrollBy(
                    0,
                    refObject?.current?.getBoundingClientRect().top - 70
                );
            } else {
                console.error(
                    "refObject?.current?.getBoundingClientRect().top is not a number:",
                    refObject?.current?.getBoundingClientRect().top
                );
            }
        }}
    >
        <Text
            bgGradient="linear(to-t, brand.namedColors.purple, brand.namedColors.black)"
            bgClip="text"
        >
            {name}
        </Text>
    </Link>
);
export default NavLink;
