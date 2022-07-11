import * as React from "react";
import { MoviesList } from "../moviesList";
import { Filters } from "../filters";
import { MainElem } from "./Main.styles";

export function Main(): JSX.Element {
    return (
        <MainElem>
            <Filters />
            <MoviesList />
        </MainElem>
    );
}
