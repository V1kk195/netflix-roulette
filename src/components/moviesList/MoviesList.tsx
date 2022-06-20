import * as React from "react";
import { MovieItem } from "../movieItem";
import { Grid } from "../../shared/grid";
import { ModalName, Movie } from "../../types/global.types";
import { MoviesCount } from "./MoviesList.styles";
import { useContext } from "react";
import { AppContext } from "../app";

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
    const appContext = useContext(AppContext);

    const handleCardClick = (movie: Movie): void => {
        appContext.setMovieDetails(movie);
    };

    return (
        <div>
            <MoviesCount>33 movies found</MoviesCount>
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
