import * as React from "react";
import styled from "styled-components";
import { CSSProperties } from "react";

const RowElem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export function Row({
    children,
    className,
    style,
}: {
    children: any;
    className?: string;
    style?: CSSProperties;
}): JSX.Element {
    return (
        <RowElem style={style} className={className}>
            {children}
        </RowElem>
    );
}
