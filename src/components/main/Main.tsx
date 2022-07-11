import * as React from "react";
import { MoviesList } from "../moviesList";
import { Filters } from "../filters";
import { MainElem } from "./Main.styles";
import { Genres } from "../../types/movies.types";

const categories: Genres[] = ["Comedy", "Documentary", "Horror", "Crime"];

export function Main(): JSX.Element {
    return (
        <MainElem>
            <Filters categories={categories} />
            <MoviesList />
        </MainElem>
    );
}
