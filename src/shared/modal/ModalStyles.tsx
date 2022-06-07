import styled from "styled-components";
import { Button } from "../button";

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #232323;
    padding: 60px;
    width: 976px;
    min-width: 150px;
    max-width: 80%;

    > h1 {
        text-transform: uppercase;
    }
`;

export const Overlay = styled.div`
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(50, 50, 50, 0.9);
    overflow: auto;
`;

export const ButtonModal = styled(Button)`
    && {
        width: 180px;
        font-weight: 500;
        padding: 15px 45px;
        border: 1px solid #f65261;
        color: #f65261;
        background-color: transparent;

        &:not(:last-child) {
            margin-right: 15px;
        }
    }

    &[type="submit"] {
        background-color: #f65261;
        color: #ffffff;
    }
`;
