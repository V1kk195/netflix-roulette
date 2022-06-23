import * as React from "react";
import LogoImg from "../../../public/assets/logo.svg";
import { Row } from "./Footer.styles";

export function Footer(): JSX.Element {
    return (
        <Row>
            <img src={LogoImg} alt="netflix roulette logo" />
        </Row>
    );
}
