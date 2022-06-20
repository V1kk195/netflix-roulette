import * as React from "react";

import LogoImg from "../../../public/assets/logo.svg";
import { Search } from "../search";
import {
    ButtonAddMovie,
    HeaderContainer,
    MainBlock,
    TopRow,
} from "./Header.styles";
import { ModalName } from "../../types/global.types";
import { useContext } from "react";
import { AppContext } from "../app";
import { MovieDetails } from "../movieDetails";

type Props = {
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function Header({ setModalName, modalOpenHandler }: Props): JSX.Element {
    const movieDetails = useContext(AppContext).movieDetails;

    const handleAddMovieModal = (): void => {
        setModalName("addMovie");
        modalOpenHandler();
    };

    return (
        <HeaderContainer
            style={
                movieDetails && {
                    backgroundColor: "#232323",
                    backgroundImage: "none",
                }
            }
        >
            {movieDetails ? (
                <>
                    <TopRow>
                        <img src={LogoImg} alt="netflix roulette logo" />
                    </TopRow>
                    <MainBlock>
                        <MovieDetails movie={movieDetails} />
                    </MainBlock>
                </>
            ) : (
                <>
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
                </>
            )}
        </HeaderContainer>
    );
}
