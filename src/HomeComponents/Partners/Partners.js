import React from "react";
import "./partners.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

const Partners = () => {
    return (
        <div className="partners-main-section overflow-hidden">
            <h1 className="text-center fw-normal">
                Partners
            </h1>
            <Container>
                <div className="swipper-sliders">
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-1.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-2.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-3.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-4.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-5.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://swiperjs.com/demos/images/nature-6.jpg"
                                className="swiper-img"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Partners;
