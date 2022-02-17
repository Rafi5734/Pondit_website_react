import React from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import "./student.css";
const Students = () => {
    return (
        <div className="student-main-section">
            <Container>
                <div className="student-main-section-1">
                    <div className="student-sub">
                        <div className="student-all-slides">
                            <Carousel>
                                <Carousel.Item>
                                    <Card style={{ width: "28rem" }}>
                                        <figure class="fir-image-figure p-3">
                                            <a
                                                class="fir-imageover"
                                                rel="noopener"
                                                target="_blank"
                                                href="https://twitter.com/_davideast"
                                            >
                                                <img
                                                    class="fir-author-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/de-sm.jpg"
                                                    alt="David East - Author"
                                                />
                                                <div class="fir-imageover-color"></div>
                                                <img
                                                    class="fir-imageover-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/twitter-logo.png"
                                                />
                                            </a>

                                            <figcaption>
                                                <div class="fig-author-figure-title">
                                                    David East
                                                </div>
                                                <div class="fig-author-figure-title">
                                                    Junior Frontend designer
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="card-icons ms-3">
                                            <i className="fa-brands fa-linkedin-in ms-3 mb-5"></i>
                                            <i className="fa-brands fa-facebook-f ms-3 mb-5"></i>
                                            <i className="fa-brands fa-twitter ms-3 mb-5"></i>
                                        </div>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card style={{ width: "28rem" }}>
                                        <figure class="fir-image-figure p-3">
                                            <a
                                                class="fir-imageover"
                                                rel="noopener"
                                                target="_blank"
                                                href="https://twitter.com/_davideast"
                                            >
                                                <img
                                                    class="fir-author-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/de-sm.jpg"
                                                    alt="David East - Author"
                                                />
                                                <div class="fir-imageover-color"></div>
                                                <img
                                                    class="fir-imageover-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/twitter-logo.png"
                                                />
                                            </a>

                                            <figcaption>
                                                <div class="fig-author-figure-title">
                                                    David East
                                                </div>
                                                <div class="fig-author-figure-title">
                                                    Junior Frontend designer
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="card-icons ms-3">
                                            <i className="fa-brands fa-linkedin-in ms-3 mb-5"></i>
                                            <i className="fa-brands fa-facebook-f ms-3 mb-5"></i>
                                            <i className="fa-brands fa-twitter ms-3 mb-5"></i>
                                        </div>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card style={{ width: "28rem" }}>
                                        <figure class="fir-image-figure p-3">
                                            <a
                                                class="fir-imageover"
                                                rel="noopener"
                                                target="_blank"
                                                href="https://twitter.com/_davideast"
                                            >
                                                <img
                                                    class="fir-author-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/de-sm.jpg"
                                                    alt="David East - Author"
                                                />
                                                <div class="fir-imageover-color"></div>
                                                <img
                                                    class="fir-imageover-image fir-clickcircle"
                                                    src="https://fir-rollup.firebaseapp.com/twitter-logo.png"
                                                />
                                            </a>

                                            <figcaption>
                                                <div class="fig-author-figure-title">
                                                    David East
                                                </div>
                                                <div class="fig-author-figure-title">
                                                    Junior Frontend designer
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build
                                                on the card title and make up
                                                the bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="card-icons ms-3">
                                            <i className="fa-brands fa-linkedin-in ms-3 mb-5"></i>
                                            <i className="fa-brands fa-facebook-f ms-3 mb-5"></i>
                                            <i className="fa-brands fa-twitter ms-3 mb-5"></i>
                                        </div>
                                    </Card>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="card-student-details">
                            <div className="card-student-details-sub">
                                <h1 className="fw-normal w-75 details-main-title">
                                    OUR SUCCESS STUDENT ACHIEVE THEIR GOAL
                                </h1>
                                <Button
                                    variant="outline-dark"
                                    className="btn-student"
                                >
                                    SEE ALL COURSES STORY{" "}
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Students;
