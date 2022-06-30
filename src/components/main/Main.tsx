import * as React from "react";
import { MoviesList } from "../moviesList";
import { Filters } from "../filters";
import { ModalName } from "../../types/global.types";
import { MainElem } from "./Main.styles";

const categories = ["comedy", "documentary", "horror", "crime"];

type Props = {
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function Main({ setModalName, modalOpenHandler }: Props): JSX.Element {
    return (
        <MainElem>
            <Filters categories={categories} />
            <MoviesList
                modalOpenHandler={modalOpenHandler}
                setModalName={setModalName}
            />
        </MainElem>
    );
}
