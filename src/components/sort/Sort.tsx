import * as React from "react";

import { Label, SelectElem } from "./Sort.styles";
import { IdName } from "../../types/global.types";
import { SORT_OPTIONS } from "../../constants";
import { fetchSortedMovies } from "../../state/movies";
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

    const fetchMovies = async (id: SORT_OPTIONS): Promise<void> => {
        try {
            await dispatch(fetchSortedMovies(id)).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Label>Sort by</Label>
            <SelectElem
                options={options}
                onChange={fetchMovies}
                defaultValue={SORT_OPTIONS.releaseDate}
            />
        </div>
    );
}
