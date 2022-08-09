import * as React from "react";
import { ReactNode } from "react";
import { FormElem } from "./Form.styles";

type Props = {
    children: ReactNode;
    id?: string;
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, id, ...rest }: Props): JSX.Element => {
    return (
        <FormElem id={id} {...rest}>
            {children}
        </FormElem>
    );
};
