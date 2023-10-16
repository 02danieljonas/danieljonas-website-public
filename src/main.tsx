import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const colors = {
    purple: "#52489c",
    black: "#000000",
    white: "#FFFFFF",
    darkBlue: "#0E1C36",
    cyan: "#40FFFF",
    lightCyan: "#B0FFFF",
    pink: "#ED254E",
    antiqueWhite: "#FAEBD7",
    aW: "#FAEBD7",
};

const theme = extendTheme({
    colors: {
        brand: {
            namedColors: { ...colors },
            text: {
                100: colors.black,
                200: colors.white,
                300: colors.darkBlue,
                400: colors.cyan,
            },
            color: {
                100: colors.black,
                200: colors.white,
                300: colors.darkBlue,
                400: colors.cyan,
                500: colors.lightCyan,
                600: colors.pink,
                700: colors.antiqueWhite,
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
    // </React.StrictMode>
);
