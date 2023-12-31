import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

import Inset from "@/Common/PagesLayout/Inset";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled className="CourseWorkLayout">
            <Inset>
                <h1>Course Work</h1>

                <nav className="sublinks">
                    {/* <NavLink to="/course-work" end>
                        Essays
                    </NavLink>

                    <NavLink to="/course-work/responsive">Responsive</NavLink> */}
                    <NavLink to="/course-work" end>
                        Order
                    </NavLink>
                </nav>
                <Outlet />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.main``;
