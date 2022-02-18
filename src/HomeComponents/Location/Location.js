import React from "react";
import { Container } from "react-bootstrap";
import "./location.css";
const Location = () => {
    return (
        <div className="location-main">
            <Container className="location-main-wrapper">
                <Container className="location-main-sub">
                    <h1 className="location-title text-center fw-normal mb-5 mt-3">
                        {" "}
                        location.
                    </h1>
                    <p className="location-para mb-5 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem recusandae sapiente beatae perferendis
                        illum dignissimos, maiores reprehenderit iure nobis
                        iste?
                    </p>
                    <div className="location-details mb-4">
                        <i class="fa-solid fa-location-arrow"></i>
                        <span className="ms-3">
                            RH Home Center, Green Road 1215 Dhaka, Bangladesh.
                        </span>
                    </div>
                    <div className="location-details">
                        <i class="fa-solid fa-phone-flip"></i>
                        <span className="ms-3">
                            (001) 800 345 333700 <br />
                            (002) 600 345 333700
                        </span>
                        <br />
                    </div>
                    <div className="location-details mt-4 mb-5">
                        <i class="fa-solid fa-envelope"></i>
                        <span className="ms-3">info@themebazar.com</span>
                        <br />
                    </div>
                    <div className="location-all-icons mb-5">
                        <i className="fa-brands fa-facebook-f me-3"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in me-3"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </Container>
                <Container className="contact-main">
                    <h1 className="contact-title text-center fw-normal mt-3 mb-5">
                        Contact
                    </h1>
                    <div className="contact-form-group">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label
                                    for="validationServer01"
                                    class="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer01"
                                    required
                                />
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="col-md-6">
                                <label
                                    for="validationServer02"
                                    class="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="validationServer02"
                                    required
                                />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="col-md-12">
                                <label
                                    for="validationServer03"
                                    class="form-label"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationServer03"
                                    aria-describedby="validationServer03Feedback"
                                    required
                                />
                                <div
                                    id="validationServer03Feedback"
                                    class="invalid-feedback"
                                >
                                    Please provide a valid city.
                                </div>
                            </div>

                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label"
                                >
                                    Message
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div class="col-12 mb-5">
                                <button class="btn btn-primary" type="submit">
                                    SUBMIT NOW
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default Location;
