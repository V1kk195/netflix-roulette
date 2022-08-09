import * as React from "react";
import { SyntheticEvent, useState } from "react";

import { IdName } from "../../types/global.types";

type Props = {
    options: IdName[];
    className?: string;
    id?: string;
    onChange?: (optionId: string) => any;
    defaultValue?: string;
};

export const Select = ({
    options,
    className,
    id,
    onChange,
    defaultValue = options[0].id,
}: Props): JSX.Element => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (
        e: SyntheticEvent<HTMLSelectElement, Event>
    ): void => {
        setValue(e.currentTarget.value);
        onChange && onChange(e.currentTarget.value);
    };

    return (
        <select
            id={id}
            className={className}
            value={value}
            onChange={(e) => handleChange(e)}
        >
            {options.map(({ id, name }) => {
                return (
                    <option key={id} value={id}>
                        {name}
                    </option>
                );
            })}
        </select>
    );
};
