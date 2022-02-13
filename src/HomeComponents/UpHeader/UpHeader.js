import React from "react";
import "./upHeader.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import PonditLogo from "../../images/01_Pondit_Homepage-final-logo.png";
import CareerImage from "../../images/01_Pondit_Homepage-career.png";
import AssessImage from "../../images/01_Pondit_Homepage-assess.png";
import ComputerImage from "../../images/01_Pondit_Homepage-computer.png";
import SuccessImage from "../../images/01_Pondit_Homepage-success.png";
const UpHeader = () => {
    return (
        <>
            <div className="upHeader">
                <Container>
                    <Row className="">
                        <Col sm>
                            <div className="upHeader-sub mt-5 mb-3 order-sm-1">
                                <p className="upHeader-moral-1 lead">
                                    ক্ষুদ্র ক্ষুদ্র বালিকণা বিন্দু বিন্দু জল
                                </p>
                                <p className="upHeader-moral-2 lead">
                                    গড়ে তোলে মহাদেশ, সাগর অতল
                                </p>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="pondit-logo order-sm-0 mt-1">
                                <img
                                    className="pondit-logo-img mt-5 mb-3"
                                    src={PonditLogo}
                                ></img>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="pondit-login mt-5 order-sm-2">
                                <Button variant="outline-dark me-4">
                                    LOGIN
                                </Button>
                                <Button variant="outline-primary">
                                    SIGN UP
                                </Button>{" "}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="pondit-navbar">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse
                            id="navbarScroll"
                            className="toggle-navbar"
                        >
                            <Nav
                                className="me-auto ms-auto my-lg-0"
                                style={{ maxHeight: "200px" }}
                                navbarScroll
                            >
                                <Nav.Link
                                    href="#action1"
                                    className="lead pondit-navbar-nav"
                                >
                                    <img
                                        src={CareerImage}
                                        className="me-2 mt-2"
                                    ></img>
                                    CAREER PATH
                                </Nav.Link>
                                <Nav.Link
                                    href="#action2"
                                    className="lead pondit-navbar-nav"
                                >
                                    <img
                                        src={AssessImage}
                                        className="ms-2 me-2"
                                    ></img>
                                    ASSESS YOURSELF
                                </Nav.Link>

                                <Nav.Link
                                    href="#"
                                    className="lead pondit-navbar-nav"
                                >
                                    <img
                                        src={ComputerImage}
                                        className="ms-2 me-2"
                                    ></img>
                                    ALL COURSES
                                </Nav.Link>
                                <Nav.Link href="#" className="lead">
                                    <img
                                        src={SuccessImage}
                                        className="ms-2 me-2"
                                    ></img>
                                    SUCCESS STORY
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default UpHeader;
