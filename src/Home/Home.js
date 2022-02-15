import React from "react";
import CareerPath from "../HomeComponents/CareerPath/CareerPath";
import MainHeader from "../HomeComponents/MainHeader/MainHeader";
import PhoneMainHeader from "../HomeComponents/PhoneMainHeader/PhoneMainHeader";
import UpHeader from "../HomeComponents/UpHeader/UpHeader";
import WindowSize from "../HomeComponents/WindowSizeCount/WindowSize";

import "./home.css";
const Home = () => {
    return (
        <div className="home">
            <UpHeader></UpHeader>
            <WindowSize></WindowSize>
            <CareerPath></CareerPath>
        </div>
    );
};

export default Home;
