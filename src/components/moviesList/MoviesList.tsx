import * as React from "react"
import {MovieItem} from "../movieItem";
import {Grid} from "../../shared/grid";
import {Movie} from "../main";
import styled from "styled-components";

type Props = {
    movies: Movie[]
}

export const MoviesList = ({movies}: Props): JSX.Element => {
    const MoviesCount = styled.p`
        padding: 25px 0;
      font-weight: 400;
      font-size: 20px;
    `;

    return (
        <div>
            <MoviesCount>33 movies found</MoviesCount>
            <Grid>
                {movies.map((movie) => {
                    return (<div key={movie.id}>
                        <MovieItem {...movie} />
                    </div>)
                })}
            </Grid>
        </div>
    );
}