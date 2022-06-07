import * as React from "react";
import { IdName } from "../../types/global.types";

type Props = {
    options: IdName[];
};

export const Select = ({ options }: Props): JSX.Element => {
    return (
        <select>
            {options.map(({ id, name }) => {
                return <option key={id}>{name}</option>;
            })}
        </select>
    );
};
