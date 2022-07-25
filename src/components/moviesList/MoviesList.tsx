import * as React from "react";
import { MovieItem } from "../movieItem";
import { Grid } from "../../shared/grid";
import { MoviesCount } from "./MoviesList.styles";
import { useEffect } from "react";
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
    const movies = useAppSelector(selectMovies);
    const moviesTotal = useAppSelector(selectMoviesTotal);

    const handleCardClick = (movie: Movie): void => {
        dispatch(openMovieDetails(movie));
    };

    const fetchMovies = async () => {
        try {
            await dispatch(fetchAllMovies()).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

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
                        <MovieItem
                            genres={movie.genres}
                            title={movie.title}
                            year={movie.release_date}
                            image={movie.poster_path}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    );
}
