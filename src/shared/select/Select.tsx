import * as React from "react";
import { IdName } from "../../types/global.types";

type Props = {
    options: IdName[];
    className?: string;
    id?: string;
};

export const Select = ({ options, className, id }: Props): JSX.Element => {
    return (
        <select id={id} className={className}>
            {options.map(({ id, name }) => {
                return <option key={id}>{name}</option>;
            })}
        </select>
    );
};
