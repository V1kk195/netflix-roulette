import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Row } from "../../shared/allignment";
import { Container, Poster } from "./MovieDetails.styles";
import { moviesApi } from "../../api";

export const MovieDetails = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("movie");

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (movieId) {
            moviesApi.getMovie(movieId).then((movie) => {
                setMovie(movie);
            });
        }
    }, [movieId]);

    return (
        movie && (
            <Container>
                <Poster
                    imageUrl={movie.poster_path}
                    alt={`${movie.title} poster`}
                />
                <div>
                    <Row>
                        <h1>{movie.title}</h1>
                        <span>{movie.vote_average}</span>
                        <p>{movie.genres}</p>
                    </Row>

                    <span>{movie.release_date}</span>

                    <p>{movie.overview}</p>
                </div>
            </Container>
        )
    );
};
