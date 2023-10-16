import { Box, Center, Image, Text } from "@chakra-ui/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { DateFormat, EducationInfo } from "./types";

import "swiper/css";

const Slides = ({ educationData }: { educationData: EducationInfo[] }) => {
    const dateFormat: DateFormat = {
        year: "numeric",
        month: "short",
    };

    return (
        <Swiper
            slidesPerView={"auto"}
            slideToClickedSlide={true}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
        >
            {educationData.map(
                (
                    { degree, picture, name, startDate, endDate, description },
                    idx
                ) => (
                    <SwiperSlide className="s" key={idx}>
                        <Box className="swiperBox" h={"100%"}>
                            <Image
                                src={picture}
                                alt={`image of ${name}`}
                                mt="auto"
                                mb="auto"
                            />
                            <Box pos={"absolute"} top={0} fontSize={"6xl"}>
                                <Text
                                    color={"brand.namedColors.cyan"}
                                    bgColor={"brand.namedColors.white"}
                                >
                                    &nbsp;{name}&nbsp;
                                </Text>
                                <Center>
                                    <Text
                                        fontSize={"md"}
                                        color={"brand.namedColors.white"}
                                        bgColor={"brand.namedColors.darkBlue"}
                                        width="max-content"
                                        textAlign={"center"}
                                        pt="10px"
                                        pb="10px"
                                    >
                                        &nbsp;&nbsp;{degree}&nbsp;&nbsp;
                                        <br />
                                        &nbsp;&nbsp;
                                        {new Date(
                                            startDate * 1000
                                        ).toLocaleDateString(
                                            "en-US",
                                            dateFormat
                                        )}
                                        &nbsp; - &nbsp;
                                        {new Date(
                                            endDate * 1000
                                        ).toLocaleDateString(
                                            "en-US",
                                            dateFormat
                                        )}
                                        &nbsp;&nbsp;
                                    </Text>
                                </Center>
                            </Box>
                        </Box>
                    </SwiperSlide>
                )
            )}
        </Swiper>
    );
};

export default Slides;
