import * as React from "react";
import { IdName } from "../../types/global.types";

type Props = {
    options: IdName[];
    className?: string;
};

export const Select = ({ options, className }: Props): JSX.Element => {
    return (
        <select className={className}>
            {options.map(({ id, name }) => {
                return <option key={id}>{name}</option>;
            })}
        </select>
    );
};
