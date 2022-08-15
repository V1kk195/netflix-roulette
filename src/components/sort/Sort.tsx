import * as React from "react";
import { useSearchParams } from "react-router-dom";

import { Label, SelectElem } from "./Sort.styles";
import { IdName } from "../../types/global.types";
import { SORT_OPTIONS } from "../../constants";
import { useAppDispatch } from "../../state";

const options: IdName[] = [
    { id: SORT_OPTIONS.title, name: "title" },
    { id: SORT_OPTIONS.genre, name: "genre" },
    { id: SORT_OPTIONS.releaseDate, name: "release date" },
    { id: SORT_OPTIONS.rating, name: "rating" },
    { id: SORT_OPTIONS.runtime, name: "runtime" },
];

export function Sort(): JSX.Element {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sortBy");

    const handleChange = (id: SORT_OPTIONS): void => {
        setSearchParams(
            { sortBy: options.find((item) => item.id === id).name },
            { replace: true }
        );
    };

    return (
        <div>
            <Label>Sort by</Label>
            <SelectElem
                options={options}
                onChange={handleChange}
                defaultValue={
                    (SORT_OPTIONS as any)?.[sortBy] || SORT_OPTIONS.releaseDate
                }
            />
        </div>
    );
}
