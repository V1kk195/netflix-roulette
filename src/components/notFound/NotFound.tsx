import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export const NotFound = (): JSX.Element => {
    return (
        <Container>
            <h1>This page doesn't exist yet.</h1>
            <Link to={"/"}>Return to home page</Link>
        </Container>
    );
};
