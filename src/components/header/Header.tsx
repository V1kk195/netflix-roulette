import * as React from "react";
import { useSelector } from "react-redux";

import LogoImg from "../../../public/assets/logo.svg";
import { Search } from "../search";
import {
    ButtonAddMovie,
    ButtonSearch,
    HeaderContainer,
    MainBlock,
    TopRow,
} from "./Header.styles";
import { MODAL_TYPES } from "../../types/global.types";
import { MovieDetails } from "../movieDetails";
import SearchIcon from "../../../public/assets/icons/search-icon.svg";
import { Row } from "../../shared/allignment";
import { useAppDispatch } from "../../state";
import { openModal } from "../../state/modal/modalSlice";
import {
    closeMovieDetails,
    selectMovieDetails,
} from "../../state/movies/moviesSlice";

export function Header(): JSX.Element {
    const dispatch = useAppDispatch();
    const movieDetails = useSelector(selectMovieDetails);

    const handleAddMovieModal = (): void => {
        dispatch(openModal(MODAL_TYPES.addMovie));
    };

    const handleSearchClick = (): void => {
        dispatch(closeMovieDetails());
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
                            <img src={SearchIcon} alt={"search icon"} />
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
