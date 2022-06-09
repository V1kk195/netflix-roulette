import * as React from "react";

import LogoImg from "../../../public/assets/logo.svg";
import { Search } from "../search";
import {
    ButtonAddMovie,
    HeaderContainer,
    MainBlock,
    TopRow,
} from "./HeaderStyles";
import { ModalName } from "../../types/global.types";

type Props = {
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function Header({ setModalName, modalOpenHandler }: Props): JSX.Element {
    const handleAddMovieModal = (): void => {
        setModalName("addMovie");
        modalOpenHandler();
    };

    return (
        <HeaderContainer>
            <TopRow>
                <img src={LogoImg} alt="netflix roulette logo" />
                <ButtonAddMovie onClick={handleAddMovieModal}>
                    + Add movie
                </ButtonAddMovie>
            </TopRow>
            <MainBlock>
                <h1>FIND YOUR MOVIE</h1>
                <Search />
            </MainBlock>
        </HeaderContainer>
    );
}
