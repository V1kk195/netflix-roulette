import * as React from "react";
import { Movie } from "../../types/global.types";
import { Image } from "../movieItem/Movieitem.styles";
import { Row } from "../../shared/allignment";

type Props = {
    movie: Movie;
};

export const MovieDetails = ({
    movie: { image, title, genres, year, imDbRating, crew: description },
}: Props): JSX.Element => {
    return (
        <Row>
            <Image src={image} />
            <div>
                <Row>
                    <h1>{title}</h1>
                    <span>{imDbRating}</span>
                    <p>{genres}</p>
                </Row>

                <span>{year}</span>

                <p>{description}</p>
            </div>
        </Row>
    );
};
