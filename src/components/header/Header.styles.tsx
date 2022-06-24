import styled from "styled-components";
import BgImage from "../../../public/assets/header_bg.png";
import { Button } from "../../shared/button";
import { Row } from "../../shared/allignment";

export const HeaderContainer = styled.header`
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    padding: 20px 60px;
    height: 396px;
`;

export const MainBlock = styled.div`
    padding: 40px 60px;
    height: 100%;
`;

export const ButtonAddMovie = styled(Button)`
    height: 46px;
    width: 177px;
    background-color: rgba(96, 96, 96, 0.68);
    color: #f65261;
    font-weight: 600;
`;

export const TopRow = styled(Row)`
    align-items: flex-start;
`;

export const ButtonSearch = styled(Button)`
    width: 30px;
    height: 30px;
    background-color: transparent;
    padding: 0;

    > img {
        width: 100%;
        height: auto;
    }
`;
