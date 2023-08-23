import styled from "styled-components";

/* Components----------------------------------*/
import CoffeeBio from "./CoffeeBio";

const CoffeeMenu = ({ member }) => {
    return (
        <CoffeeMenuStyled className="CoffeeMenu">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <CoffeeBio member={member} />
        </CoffeeMenuStyled>
    );
};

export default CoffeeMenu;

const CoffeeMenuStyled = styled.div`
    background-color: #d0b19d;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 20px;
        color: White;
        background-color: #d0b19d;
        margin: 0px;
        padding: 5px, 10px;
    }
`;
