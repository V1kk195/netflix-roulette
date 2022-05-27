import * as React from 'react';
import styled from "styled-components";

export const Row = ({ children, className }: {children: any, className?: string}): JSX.Element => {
    const Row = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    return <Row className={className}>{children}</Row>;
}