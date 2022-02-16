import React from "react";
import { Container } from "react-bootstrap";
import "./careerPath.css";
import FootPrint from "../../images/01_Pondit_Homepage-foot-print.png";
import Man from "../../images/01_Pondit_Homepage-man-image.png";
import Line1 from "../../images/01_Pondit_Homepage-path-line.png";

const CareerPath = () => {
    return (
        <div className="careerPath-main-second-section">
            <Container className="careerPath-sub">
                <div className="careerPath-description">
                    <h1 className="mb-3 careerPath-main-title">
                        CHOOSE CAREER PATH TO EXPLORE YOURSELF
                    </h1>
                    <p className="careerPath-para mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, eum necessitatibus itaque quidem consequuntur
                        blanditiis earum facere voluptas incidunt perferendis?
                    </p>
                    <ul>
                        <li>Out of box solution</li>
                        <li>We really care about</li>
                    </ul>
                </div>
                <div className="careerPath-images">
                    <img src={Line1} className="careerPath-Line1"></img>
                    <img src={FootPrint} className="careerPath-footPrint"></img>
                    <img src={Man} className="careerPath-Man"></img>
                </div>
            </Container>
        </div>
    );
};

export default CareerPath;
