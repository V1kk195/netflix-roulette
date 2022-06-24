import * as React from "react";
import { Sort } from "../sort";
import { FiltersRow, List } from "./Filters.styles";

type Props = {
    categories: string[];
};

export function Filters({ categories }: Props): JSX.Element {
    return (
        <FiltersRow>
            <List>
                <li>All</li>
                {categories.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </List>
            <Sort />
        </FiltersRow>
    );
}
