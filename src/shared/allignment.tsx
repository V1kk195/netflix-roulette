import * as React from 'react';
import styled from "styled-components";

export const Row = ({ children }: {children: any}): JSX.Element => {
    const Row = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    return <Row>{children}</Row>;
}