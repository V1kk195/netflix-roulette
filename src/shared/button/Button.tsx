import * as React from "react";
import { ReactNode } from "react";
import { ButtonElem } from "./Button.styles";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
    form?: string;
};

export function Button({
    children,
    type = "button",
    className,
    onClick,
    form,
}: ButtonProps): JSX.Element {
    return (
        <ButtonElem
            type={type}
            className={className}
            onClick={onClick}
            form={form}
        >
            {children}
        </ButtonElem>
    );
}
