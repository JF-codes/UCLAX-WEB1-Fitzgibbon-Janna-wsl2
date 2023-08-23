import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./coffeelogo.jpg";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Organic Coffee Co logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 50%;
        border-radius: 20px;
        height: auto;
    }
`;
