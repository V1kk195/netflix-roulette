import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Sort } from "../sort";
import { FiltersRow, LiItem, List } from "./Filters.styles";
import { Genres } from "../../types/movies.types";
import { useAppDispatch } from "../../state";
import { fetchFilteredMovies } from "../../state/movies";
import { categories } from "../../constants";

export function Filters(): JSX.Element {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const genreQuery = searchParams?.get("genre");

    const fetchMovies = async (genre: Genres): Promise<void> => {
        try {
            await dispatch(fetchFilteredMovies(genre)).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (genre: Genres): void => {
        fetchMovies(genre).then(() => {
            navigate(`/search?genre=${genre}`);
        });
    };

    return (
        <FiltersRow>
            <List>
                <LiItem active={!genreQuery} onClick={() => handleClick("")}>
                    All
                </LiItem>
                {categories.map((item) => (
                    <LiItem
                        active={
                            genreQuery?.toLowerCase() === item?.toLowerCase()
                        }
                        key={item}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </LiItem>
                ))}
            </List>
            <Sort />
        </FiltersRow>
    );
}
