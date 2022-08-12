import * as React from "react";
import { ReactNode } from "react";
import { FormElem } from "./Form.styles";

type Props = {
    children: ReactNode;
    id?: string;
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
};

export const Form = ({
    children,
    id,
    className,
    ...rest
}: Props): JSX.Element => {
    return (
        <FormElem id={id} className={className} {...rest}>
            {children}
        </FormElem>
    );
};
