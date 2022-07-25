import * as React from "react";

import { Sort } from "../sort";
import { FiltersRow, List } from "./Filters.styles";
import { Genres } from "../../types/movies.types";
import { useAppDispatch } from "../../state";
import { fetchFilteredMovies } from "../../state/movies";
import { categories } from "../../constants";

export function Filters(): JSX.Element {
    const dispatch = useAppDispatch();

    const fetchMovies = async (genre: Genres): Promise<void> => {
        try {
            await dispatch(fetchFilteredMovies(genre)).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (genre: Genres): void => {
        fetchMovies(genre);
    };

    return (
        <FiltersRow>
            <List>
                <li onClick={() => handleClick("")}>All</li>
                {categories.map((item) => (
                    <li key={item} onClick={() => handleClick(item)}>
                        {item}
                    </li>
                ))}
            </List>
            <Sort />
        </FiltersRow>
    );
}
