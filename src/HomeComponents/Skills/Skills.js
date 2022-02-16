import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./skills.css";
import SlidesImage from "../../images/01_Pondit_Homepage_slides_all.png";
import SlideSvgImage from "../../images/01_Pondit_Homepage_slide_svg.png";
import Line4 from "../../images/01_Pondit_Homepage_skill_lin4.png";
const Skills = () => {
    return (
        <Container className="skills-main-section">
            
                <img src={Line4} className="line4"></img>
                <div className="skills-short-description">
                    <h1 className="text-center fw-normal skills-main-title">
                        IMPROVE YOUR LEARNING SKILLS
                    </h1>
                    <p className="text-center skills-main-full-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae, reprehenderit, maxime minima praesentium
                        similique optio unde nobis recusandae, corporis libero
                        amet cum dignissimos placeat neque consequuntur debitis?
                        Aliquid, sint ipsam.
                    </p>
                </div>
                <div className="skills-sub">
                    <div className="skills-slides">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={SlidesImage}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={SlidesImage}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={SlidesImage}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="skills-svg-image ms-5">
                        <img src={SlideSvgImage}></img>
                    </div>
                </div>
            
        </Container>
    );
};

export default Skills;
