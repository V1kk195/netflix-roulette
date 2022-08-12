import * as React from "react";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { MovieItem } from "../movieItem";
import { Grid } from "../../shared/grid";
import { MoviesCount } from "./MoviesList.styles";
import { useAppDispatch, useAppSelector } from "../../state";
import {
    fetchAllMovies,
    openMovieDetails,
    selectMovies,
    selectMoviesTotal,
} from "../../state/movies";
import { Movie } from "../../types/movies.types";

export function MoviesList(): JSX.Element {
    const dispatch = useAppDispatch();
    const { searchQuery } = useParams();
    const [searchParams] = useSearchParams();

    const movies = useAppSelector(selectMovies);
    const moviesTotal = useAppSelector(selectMoviesTotal);

    const query = useMemo(() => {
        let query = searchQuery
            ? `searchBy=title&search=${searchQuery}${
                  searchParams.toString() && "&"
              }${searchParams}`
            : `${searchParams}`;

        const genreQuery = searchParams?.get("genre");

        if (genreQuery) {
            query = `${query}&filter=${genreQuery}&sortOrder=desc&limit=30`;
        }

        return query;
    }, [searchParams, searchQuery]);

    const handleCardClick = (movie: Movie): void => {
        dispatch(openMovieDetails(movie));
    };

    const fetchMovies = async () => {
        try {
            await dispatch(fetchAllMovies(query)).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [searchQuery]);

    return (
        <div>
            <MoviesCount>{moviesTotal} movies found</MoviesCount>
            <Grid>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        onClick={() => handleCardClick(movie)}
                        style={{ cursor: "pointer" }}
                    >
                        <MovieItem movie={movie} />
                    </div>
                ))}
            </Grid>
        </div>
    );
}
