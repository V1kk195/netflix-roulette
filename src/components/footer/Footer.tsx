import styled from "styled-components";
import * as React from "react";
import LogoImg from "../../../public/assets/logo.svg";

export function Footer() {
    const Row = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        background-color: #424242;
    `;

    return (
        <Row>
            <img src={LogoImg} alt="netflix roulette logo" />
        </Row>
    );
}
