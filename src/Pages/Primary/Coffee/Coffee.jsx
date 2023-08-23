import styled from "styled-components";

/* Components----------------------------------*/
import CoffeeList from "./CoffeeList";
import Inset from "@/Common/PagesLayout/Inset";

const Coffee = () => {
    return (
        <CoffeeStyled className="Coffee">
            <Inset>
                <h1>Coffee</h1>
                <CoffeeList />
            </Inset>
        </CoffeeStyled>
    );
};

export default Coffee;

const CoffeeStyled = styled.div``;
