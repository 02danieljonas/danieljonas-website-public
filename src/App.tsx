import { Box } from "@chakra-ui/react";
import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Certification from "./components/Certification/Certification";
import Education from "./components/Education/Education";
// import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { WebsiteContextProvider } from "./context";

function App() {
    return (
        <WebsiteContextProvider>
            <Box
                className="App"
                pb={"40px"}
                color={"brand.namedColors.darkBlue"}
            >
                <Navbar />
                <AboutMe />
                <Projects />
                <Education />
                <WorkExperience />
                <Certification />
                {/* <Info/> */}
            </Box>
        </WebsiteContextProvider>
    );
}

export default App;
