import * as React from "react";
import { useState } from "react";

import { InputTypes } from "../../types/global.types";

type Props = {
    type: InputTypes;
};

export const Input = ({ type }: Props): JSX.Element => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <input type={type} value={value} onChange={(e) => handleChange(e)} />
    );
};
