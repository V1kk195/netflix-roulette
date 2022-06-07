import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
};

export function Button({
    children,
    type = "button",
    className,
}: ButtonProps): JSX.Element {
    const Button = styled.button`
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 20px;
        text-transform: uppercase;
    `;

    return (
        <Button type={type} className={className}>
            {children}
        </Button>
    );
}
