import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import CareerPath from "./Career Path/CareerPath";
import AssessYourSelf from "./AssessYourSelf/AssessYourSelf";
import AllCourses from "./AllCourses/AllCourses";
import SuccessStory from "./SuccessStory/SuccessStory";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="career" element={<CareerPath />} />
                <Route path="assess" element={<AssessYourSelf />} />
                <Route path="course" element={<AllCourses />} />
                <Route path="success" element={<SuccessStory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
