import * as React from "react";
import { Movie } from "../../types/global.types";
import { Row } from "../../shared/allignment";
import { Container, Poster } from "./MovieDetails.styles";

type Props = {
    movie: Movie;
};

export const MovieDetails = ({
    movie: { image, title, genres, year, imDbRating, crew: description },
}: Props): JSX.Element => {
    return (
        <Container>
            <Poster src={image} />
            <div>
                <Row>
                    <h1>{title}</h1>
                    <span>{imDbRating}</span>
                    <p>{genres}</p>
                </Row>

                <span>{year}</span>

                <p>{description}</p>
            </div>
        </Container>
    );
};
