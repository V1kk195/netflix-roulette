import * as React from "react";
import styled from "styled-components";

import LogoImg from "../../../public/assets/logo.svg";
import BgImage from "../../../public/assets/header_bg.png";
import { Row } from "../../shared/allignment";
import { Button } from "../../shared/button/Button";
import { Search } from "../search";

export function Header(): JSX.Element {
    const Header = styled.header`
        background-image: url(${BgImage});
        background-repeat: no-repeat;
        padding: 20px 60px;
        height: 396px;
    `;

    const MainBlock = styled.div`
        padding: 0 60px;
        margin-top: 40px;
    `;

    const ButtonAddMovie = styled(Button)`
        height: 46px;
        width: 177px;
        background-color: rgba(96, 96, 96, 0.68);
        color: #f65261;
        font-weight: 600;
    `;

    const TopRow = styled(Row)`
        align-items: flex-start;
    `;

    return (
        <Header>
            <TopRow>
                <img src={LogoImg} alt="netflix roulette logo" />
                <ButtonAddMovie>+ Add movie</ButtonAddMovie>
            </TopRow>
            <MainBlock>
                <h1>FIND YOUR MOVIE</h1>
                <Search />
            </MainBlock>
        </Header>
    );
}
