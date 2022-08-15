import * as React from "react";
import { useEffect, useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { MovieItem } from "../movieItem";
import { Grid } from "../../shared/grid";
import { MoviesCount } from "./MoviesList.styles";
import { useAppDispatch, useAppSelector } from "../../state";
import {
    fetchAllMovies,
    selectMovies,
    selectMoviesTotal,
} from "../../state/movies";
import { Movie } from "../../types/movies.types";

const queriesNames = {
    rating: "vote_average",
    ["release date"]: "release_date",
    release_date: "release_date",
    releasedate: "release_date",
    title: "title",
    genre: "genres",
    runtime: "runtime",
};

export function MoviesList(): JSX.Element {
    const dispatch = useAppDispatch();
    const { searchQuery } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const movies = useAppSelector(selectMovies);
    const moviesTotal = useAppSelector(selectMoviesTotal);

    const query = useMemo(() => {
        let query = searchQuery ? `searchBy=title&search=${searchQuery}` : "";

        const genreQuery = searchParams?.get("genre");
        const sortByQuery = searchParams?.get("sortBy");

        if (genreQuery) {
            query = `${query}&filter=${genreQuery}`;
        }

        if (sortByQuery) {
            query = `${query}&sortBy=${
                (queriesNames as any)[sortByQuery]
            }&sortOrder=desc&limit=30`;
        }

        return query;
    }, [searchParams, searchQuery]);

    const handleCardClick = (movie: Movie): void => {
        navigate(`?movie=${movie.id}`);
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
    }, [searchQuery, query]);

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
