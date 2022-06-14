import * as React from "react";
import styled from "styled-components";

const RowElem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export function Row({
    children,
    className,
}: {
    children: any;
    className?: string;
}): JSX.Element {
    return <RowElem className={className}>{children}</RowElem>;
}
