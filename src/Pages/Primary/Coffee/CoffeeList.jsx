import styled from "styled-components";
/* Data----------------------------------------*/
import { coffeeData } from "./coffeeData";
/* Components----------------------------------*/
import CoffeeMenu from "./CoffeeMenu/CoffeeMenu";

const CoffeeList = () => {
    return (
        <CoffeeListStyled className="CoffeeList">
            {coffeeData.map((member) => {
                return <CoffeeMenu key={member.id} member={member} />;
            })}
        </CoffeeListStyled>
    );
};

export default CoffeeList;

const CoffeeListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;
