import styled from "styled-components";
import LogoImg from "../../../public/assets/logo.svg";
import * as React from "react";

export const Footer = () => {
    const Row = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      background-color: #424242;
    `;

    return (
        <Row>
            <img src={LogoImg}  alt='netflix roulette logo' />
        </Row>
    )
}