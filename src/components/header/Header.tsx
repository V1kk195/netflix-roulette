import * as React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

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

export function Header(): JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("movie");

    const handleAddMovieModal = (): void => {
        dispatch(openModal(MODAL_TYPES.addMovie));
    };

    const handleSearchClick = (): void => {
        navigate(``);
    };

    return (
        <HeaderContainer
            style={
                movieId && {
                    backgroundColor: "#232323",
                    backgroundImage: "none",
                }
            }
        >
            {movieId ? (
                <>
                    <Row style={{ alignItems: "center" }}>
                        <Link to="/">
                            <img src={LogoImg} alt="netflix roulette logo" />
                        </Link>
                        <ButtonSearch type="button" onClick={handleSearchClick}>
                            <img src={SearchIcon} alt={"search icon"} />
                        </ButtonSearch>
                    </Row>
                    <MainBlock>
                        <MovieDetails />
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
