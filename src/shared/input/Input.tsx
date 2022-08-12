import * as React from "react";
import { useState } from "react";

import { InputTypes } from "../../types/global.types";

type Props = {
    type: InputTypes;
    placeholder?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    id?: string;
};

export const Input = ({
    type,
    placeholder,
    defaultValue = "",
    onChange,
    className,
    id,
    ...rest
}: Props): JSX.Element => {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        onChange && onChange(e.target.value);
    };

    return (
        <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            className={className}
            {...rest}
        />
    );
};
