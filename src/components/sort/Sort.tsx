import * as React from "react";

import { Label, SelectElem } from "./Sort.styles";
import { IdName } from "../../types/global.types";

const options: IdName[] = [
    { id: "title", name: "title" },
    { id: "genre", name: "genre" },
    { id: "releaseDate", name: "release date" },
    { id: "rating", name: "rating" },
    { id: "runtime", name: "runtime" },
];

export function Sort() {
    return (
        <div>
            <Label>Sort by</Label>
            <SelectElem options={options} />
        </div>
    );
}
