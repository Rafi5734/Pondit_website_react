import React from "react";
import useWindowSize from "./useWindowSize";
const WindowSize = () => {
    const size = useWindowSize();
    console.log(size.width <= 450);
    return (
        <div>
            {size.width}px / {size.height}px
            {size.width <= 450 ? (
                <div>
                    <h1>I am from 450px</h1>
                </div>
            ) : (
                <div>
                    <h1>I am from upper 450px</h1>
                </div>
            )}
        </div>
    );
};

export default WindowSize;
