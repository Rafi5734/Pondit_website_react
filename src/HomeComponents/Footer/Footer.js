import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";
import FooterLogo from "../../images/01_Pondit_Homepage_footer_logo.png";
const Footer = () => {
    return (
        <div className="footer-main-section">
            <Container className="footer-wrapper-1">
                <div className="footer-logo-BG">
                    <img src={FooterLogo}></img>
                </div>
                <p className="text-center w-50 mt-4">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisementric
                    country i which roasted parts of sentences fly into place
                    and added to your mouth.
                </p>
                <div className="footer-all-icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
