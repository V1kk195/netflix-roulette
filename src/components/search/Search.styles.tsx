import styled from "styled-components";

import { Button } from "../../shared/button";
import { Input } from "../../shared/input";
import { Form } from "../form";

export const FormElem = styled(Form)`
    height: 57px;
    display: flex;
    gap: 15px;
    margin: 0 auto;
`;

export const InputElem = styled(Input)`
    background-color: rgba(50, 50, 50, 0.8);
    width: 70%;
    border: none;
    font-weight: 400;
    font-size: 20px;
    padding: 15px 20px;
    color: #fff;

    &::placeholder {
        opacity: 0.3;
    }
`;

export const ButtonSearch = styled(Button)`
    background-color: #f65261;
    width: 25%;
    color: #fff;
    font-weight: 500;
`;
