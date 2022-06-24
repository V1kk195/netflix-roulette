import styled from "styled-components";
import { Button } from "../../shared/button";

export const Image = styled.img`
    margin-bottom: 20px;
`;

export const Year = styled.div`
    padding: 4px 8px;
    border: 1px solid #979797;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
    height: 26px;
`;

export const MenuButton = styled(Button)<{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? "block" : "none")};
    padding: 0;
    background-color: transparent;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
`;

export const Menu = styled.ul<{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? "block" : "none")};
    list-style: none;
    background-color: rgba(35, 35, 35, 0.918051);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.1), 0 10px 50px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 30px 0 12px 0;
    width: 60%;

    > li {
        padding: 10px 0 10px 25px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #f65261;
        }
    }
`;

export const ButtonClose = styled(Button)`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 12px;
    height: 12px;
    background-color: transparent;
    padding: 0;

    > img {
        width: 100%;
        height: auto;
    }
`;
