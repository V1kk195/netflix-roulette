import * as React from "react";
import { useContext } from "react";

import LogoImg from "../../../public/assets/logo.svg";
import { Search } from "../search";
import {
    ButtonAddMovie,
    ButtonSearch,
    HeaderContainer,
    MainBlock,
    TopRow,
} from "./Header.styles";
import { MODAL_TYPES, ModalName } from "../../types/global.types";
import { AppContext } from "../../context";
import { MovieDetails } from "../movieDetails";
import SearchIcon from "../../../public/assets/icons/search-icon.svg";
import { Row } from "../../shared/allignment";

type Props = {
    modalOpenHandler?: () => void;
    setModalName?: (name: ModalName) => void;
};

export function Header({ setModalName, modalOpenHandler }: Props): JSX.Element {
    const context = useContext(AppContext);
    const movieDetails = context.movieDetails;

    const handleAddMovieModal = (): void => {
        setModalName(MODAL_TYPES.addMovie);
        modalOpenHandler();
    };

    const handleSearchClick = (): void => {
        context.setMovieDetails(null);
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
                    <Row style={{ alignItems: "center" }}>
                        <img src={LogoImg} alt="netflix roulette logo" />
                        <ButtonSearch type="button" onClick={handleSearchClick}>
                            <img src={SearchIcon} />
                        </ButtonSearch>
                    </Row>
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
