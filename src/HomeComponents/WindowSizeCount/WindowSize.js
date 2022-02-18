import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import PhoneMainHeader from "../PhoneMainHeader/PhoneMainHeader";
import useWindowSize from "./useWindowSize";
import "./windowSize.css";
import HomePageImage from "../../images/01_Pondit_Homepage_Updated_homePage.png";
import YellowImage from "../../images/01_Pondit_Homepage_yellow_leaf.png";
import RedImage from "../../images/01_Pondit_Homepage_red_leaf.png";
import BlueImage from "../../images/01_Pondit_Homepage_blue_leaf.png";
import GreenImage from "../../images/01_Pondit_Homepage_green_leaf.png";
const WindowSize = () => {
    const size = useWindowSize();
    // console.log(size.width <= 450);
    return (
        <div className="overflow-hidden">
            <div className="overflow-hidden">
                {/* {size.width}px / {size.height}px */}
                {size.width <= 654 ? (
                    <div className="phone-Main-Header overflow-hidden mb-5">
                        <div className="phone-sub mb-5">
                            <div className="phone-sub-1">
                                <div className="phone-yellow-image-leaf me-3">
                                    <img
                                        src={YellowImage}
                                        className="phone-yellow-image"
                                    ></img>
                                </div>
                                <div className="phone-yellow-image-description mt-5">
                                    <p>Choose Your CareerPath</p>
                                    <p>
                                        Visit Our <span>Courses.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="phone-sub-1">
                                <div className="phone-yellow-image-leaf me-3">
                                    <img
                                        src={RedImage}
                                        className="phone-yellow-image"
                                    ></img>
                                </div>
                                <div className="phone-yellow-image-description mt-5">
                                    <p>SPONSORSHIP PROGRAM</p>
                                    <p>
                                        Give a test and grave the opportinities.
                                    </p>
                                </div>
                            </div>
                            <div className="phone-sub-1">
                                <div className="phone-yellow-image-leaf me-3">
                                    <img
                                        src={BlueImage}
                                        className="phone-yellow-image"
                                    ></img>
                                </div>
                                <div className="phone-yellow-image-description mt-5">
                                    <p>INTERNSHIP OPPORTUNITY</p>
                                    <p>
                                        Get experience and learn how to work in
                                        the Industry.
                                    </p>
                                </div>
                            </div>
                            <div className="phone-sub-1">
                                <div className="phone-yellow-image-leaf me-3">
                                    <img
                                        src={GreenImage}
                                        className="phone-yellow-image"
                                    ></img>
                                </div>
                                <div className="phone-yellow-image-description mt-5">
                                    <p>SOFTWARE DEVELOPMENT</p>
                                    <p>
                                        Develop your idea by us with cutting
                                        edge technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="main-header">
                        <div className="sub-main-header">
                            <img
                                src={HomePageImage}
                                alt="home page image"
                                className="homepage-main-image"
                            ></img>
                            <div className="career-path">
                                <p className="career-para">
                                    CHOOSE CAREER PATH
                                </p>
                                <p className="career-para">Confused?</p>
                                <p className="career-para">Ask PonditBOT</p>
                            </div>
                            <div className="assess-self">
                                <p className="career-para">ASSESS YOURSELF</p>
                                <p className="career-para">
                                    Check your skill and
                                </p>
                                <p className="career-para">ready to learn.</p>
                            </div>
                            <div className="skills">
                                <p className="career-para">
                                    IMPROVE YOUR SKILLS
                                </p>
                                <i className="fa-solid fa-angle-right me-2"></i>
                                <span>404 Online classes</span>
                                <br />
                                <i className="fa-solid fa-angle-right me-2"></i>
                                <span>102 Virtual Courses</span>
                                <br />
                                <i className="fa-solid fa-angle-right me-2"></i>
                                <span>Free Seminar</span>
                            </div>
                            <div className="grow">
                                <p className="career-para">GROW YOUR CAREER</p>
                                <p className="career-para">
                                    Our Success Students are
                                </p>
                                <p className="career-para">doing well.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WindowSize;

{
    /*  */
}
