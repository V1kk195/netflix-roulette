import * as React from "react";
import { Row } from "../../shared/allignment";
import { Container, Poster } from "./MovieDetails.styles";
import { Movie } from "../../types/movies.types";

type Props = {
    movie: Movie;
};

export const MovieDetails = ({
    movie: { poster_path, title, genres, release_date, vote_average, overview },
}: Props): JSX.Element => {
    return (
        <Container>
            <Poster src={poster_path} />
            <div>
                <Row>
                    <h1>{title}</h1>
                    <span>{vote_average}</span>
                    <p>{genres}</p>
                </Row>

                <span>{release_date}</span>

                <p>{overview}</p>
            </div>
        </Container>
    );
};
