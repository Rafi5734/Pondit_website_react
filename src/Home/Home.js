import React from "react";
import AssessYourSelf from "../HomeComponents/AssessYourSelf/AssessYourSelf";
import CareerPath from "../HomeComponents/CareerPath/CareerPath";
import MainHeader from "../HomeComponents/MainHeader/MainHeader";
import Partners from "../HomeComponents/Partners/Partners";
import PhoneMainHeader from "../HomeComponents/PhoneMainHeader/PhoneMainHeader";
import Skills from "../HomeComponents/Skills/Skills";
import Students from "../HomeComponents/Students/Students";
import UpHeader from "../HomeComponents/UpHeader/UpHeader";
import WindowSize from "../HomeComponents/WindowSizeCount/WindowSize";

import "./home.css";
const Home = () => {
    return (
        <div className="home">
            <UpHeader></UpHeader>
            <WindowSize></WindowSize>
            <CareerPath></CareerPath>
            <AssessYourSelf></AssessYourSelf>
            <Skills></Skills>
            <Students></Students>
            <Partners></Partners>
        </div>
    );
};

export default Home;
