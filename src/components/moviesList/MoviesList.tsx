import * as React from "react";
import styled from "styled-components";
import { MovieItem } from "../movieItem";
import { Grid } from "../../shared/grid";
import { ModalName, Movie } from "../../types/global.types";

type Props = {
    movies: Movie[];
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function MoviesList({
    movies,
    modalOpenHandler,
    setModalName,
}: Props): JSX.Element {
    const MoviesCount = styled.p`
        padding: 25px 0;
        font-weight: 400;
        font-size: 20px;
    `;

    return (
        <div>
            <MoviesCount>33 movies found</MoviesCount>
            <Grid>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <MovieItem
                            genres={movie.genres}
                            title={movie.title}
                            year={movie.year}
                            image={movie.image}
                            modalOpenHandler={modalOpenHandler}
                            setModalName={setModalName}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    );
}
