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
        text-transform: capitalize;
    }

    label {
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        color: #f65261;
        margin-bottom: 15px;
    }

    input,
    select {
        height: 45px;
        border: none;
        margin-bottom: 30px;
        background-color: rgba(50, 50, 50, 0.95);
        padding: 15px;
    }
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? "block" : "none")};
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

export const ButtonClose = styled(Button)`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    padding: 0;

    > img {
        width: 100%;
        height: auto;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
