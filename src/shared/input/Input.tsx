import * as React from "react";
import { useState } from "react";

import { InputTypes } from "../../types/global.types";

type Props = {
    type: InputTypes;
    placeholder?: string;
};

export const Input = ({ type, placeholder }: Props): JSX.Element => {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
        />
    );
};
