import styled from "styled-components";
/* Components----------------------------------*/
import DetailList from "./Details/DetailList";
const CoffeeBio = ({ member }) => {
    return (
        <CoffeeBioStyled className="CoffeeBio">
            <div className="year">
                <b>Individual Price Per Bag:</b>
                {member.yearStarted}
            </div>
            <DetailList member={member} />
        </CoffeeBioStyled>
    );
};

export default CoffeeBio;

const CoffeeBioStyled = styled.div`
    padding: 20px;
    font-size: 14px;
`;
