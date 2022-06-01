import * as React from "react";
import styled from "styled-components";

type Props = {
    children: any;
};

export function Grid({ children }: Props): JSX.Element {
    const Container = styled.div`
        display: grid;
        gap: 45px 60px;
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));

        img {
            width: 100%;
            height: auto;
        }
    `;

    return <Container>{children}</Container>;
}
