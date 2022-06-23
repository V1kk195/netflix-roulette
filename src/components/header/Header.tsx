import * as React from "react";

import LogoImg from "../../../public/assets/logo.svg";
import { Search } from "../search";
import {
    ButtonAddMovie,
    HeaderContainer,
    MainBlock,
    TopRow,
} from "./Header.styles";
import { MODAL_TYPES, ModalName } from "../../types/global.types";

type Props = {
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function Header({ setModalName, modalOpenHandler }: Props): JSX.Element {
    const handleAddMovieModal = (): void => {
        setModalName(MODAL_TYPES.addMovie);
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
