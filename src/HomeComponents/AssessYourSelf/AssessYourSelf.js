import React from "react";
import { Container } from "react-bootstrap";
import "./assessYourSelf.css";
import Line2 from "../../images/01_Pondit_Homepage_line_2.png";
import PencilMan from "../../images/01_Pondit_Homepag_pencil_man.png";
import VideoGalleryImage from "../../images/video-gallery.png";
import PictureGalleryImage from "../../images/picture-gallery.png";
import DocumentGalleryImage from "../../images/document-gallery.png";
const AssessYourSelf = () => {
    return (
        <Container>
            <div className="assessYourSelf-main-section">
                <div className="assessYourSelf-sub-section">
                    <div className="assessYourSelf-all-images">
                        <img src={Line2} className="line2-image"></img>
                        <div className="assessYourSelf-images-inside">
                            <img src={PencilMan} className="pencil-image"></img>
                        </div>
                    </div>
                    <div className="assessYourSelf-all-gallery">
                        <h1 className="assessYourSelf-main-title">
                            HOW TO ASSESS YOURSELF
                        </h1>
                        <div className="assessYourSelf-gallery-sub">
                            <img
                                src={VideoGalleryImage}
                                className="mt-5 me-3"
                            ></img>
                            <div className="gallery-details mt-5">
                                <h4>WHY NEED TO ASSESS?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Neque iste recusandae nemo
                                    quidem, enim fuga?
                                </p>
                            </div>
                        </div>
                        <div className="assessYourSelf-gallery-sub">
                            <img
                                src={PictureGalleryImage}
                                className="mt-5 me-3"
                            ></img>
                            <div className="gallery-details mt-5">
                                <h4>WHY YOU NEED TO ASSESS?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Neque iste recusandae nemo
                                    quidem, enim fuga?
                                </p>
                            </div>
                        </div>
                        <div className="assessYourSelf-gallery-sub">
                            <img
                                src={DocumentGalleryImage}
                                className="mt-5 me-3"
                            ></img>
                            <div className="gallery-details mt-5">
                                <h4>WHY NEED TO ASSESS?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Neque iste recusandae nemo
                                    quidem, enim fuga?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AssessYourSelf;
