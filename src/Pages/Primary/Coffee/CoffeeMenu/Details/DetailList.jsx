import styled from "styled-components";
/* Components----------------------------------*/
import Detail from "./Detail";

const DetailList = ({ member }) => {
    return (
        <DetailListStyled className="DetailList">
            {member.details.map((detail, idx) => {
                return <Detail key={idx} detail={detail} />;
            })}
        </DetailListStyled>
    );
};

export default DetailList;

const DetailListStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
`;
