import * as React from "react";
import { Button } from "../../shared/button/Button";
import styled from "styled-components";

export const Search = (): JSX.Element => {

    const Form = styled.form`
        height: 57px;
        display: flex;
        gap: 15px;
        margin: 0 auto;
    `;

    const Input = styled.input`
        background-color: rgba(50, 50, 50, 0.8);
        width: 75%;
        border: none;
        font-weight: 400;
        font-size: 20px;
        padding: 15px 20px;
        color: #fff;
      
        &::placeholder {
            opacity: 0.3;
        }
    `;

    const ButtonSearch = styled(Button)`
        background-color: #F65261;
        width: 25%;
      color: #fff;
      font-weight: 500;
    `;

    return (
        <Form>
            <Input type='text' placeholder="What do you want to watch?" />
            <ButtonSearch type='submit'>SEARCH</ButtonSearch>
        </Form>
    );
}