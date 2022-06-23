import * as React from "react";
import { ReactNode } from "react";
import { FormElem } from "./Form.styles";

type Props = {
    children: ReactNode;
};

export const Form = ({ children }: Props): JSX.Element => {
    return <FormElem>{children}</FormElem>;
};
