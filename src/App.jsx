import { Routes, Route } from "react-router-dom";
/* Layout Pages ----------------------*/
import PagesLayout from "./Common/PagesLayout/PagesLayout";
/* Components ----------------------*/

/*Pages: Primary -------*/
import PrimaryLayout from "./Pages/Primary/PrimaryLayout";
import Home from "./Pages/Primary/Home/Home";
import Coffee from "./Pages/Primary/Coffee/Coffee";
import Contact from "./Pages/Primary/Contact/Contact";

/*Pages: Course Work -------*/
import CourseWorkLayout from "./Pages/CourseWork/CourseWorkLayout";
import Essays from "./Pages/CourseWork/Essays/Essays";

import Responsive from "./Pages/CourseWork/Responsive";
const App = () => {
    return (
        <Routes>
            <Route element={<PagesLayout />}>
                <Route element={<PrimaryLayout />} path="">
                    <Route element={<Home />} path="" />
                    <Route element={<Coffee />} path="coffee" />
                    <Route element={<Contact />} path="contact" />
                </Route>

                <Route element={<CourseWorkLayout />} path="course-work">
                    {/*
                    <Route element={<Essays />} path="" />
                    <Route element={<Responsive />} path="responsive" /> */}
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
