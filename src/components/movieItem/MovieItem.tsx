import * as React from "react";
import { useState } from "react";

import { Row } from "../../shared/allignment";
import contextMenuButton from "../../../public/assets/icons/context_menu_button.svg";
import {
    ButtonClose,
    Menu,
    MenuButton,
    Poster,
    Year,
} from "./Movieitem.styles";
import CloseIcon from "../../../public/assets/icons/close-button.svg";
import { MODAL_TYPES } from "../../types/global.types";
import { useAppDispatch } from "../../state";
import { openModal } from "../../state/modal/modalSlice";
import { setCurrentMovie } from "../../state/movies";
import { Movie } from "../../types/movies.types";

type Props = {
    movie: Movie;
};

export function MovieItem({ movie }: Props): JSX.Element {
    const dispatch = useAppDispatch();

    const [isMenuButtonVisible, setIsMenuButtonVisible] =
        useState<boolean>(false);
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    const handleItemHover = (): void => {
        setIsMenuButtonVisible(true);
    };

    const handleItemLeave = (): void => {
        setIsMenuButtonVisible(false);
    };

    const handleMenuButtonClick = (): void => {
        setIsMenuVisible((prevState) => !prevState);
    };

    const handleMenuItemClick = (title: MODAL_TYPES): void => {
        dispatch(setCurrentMovie(movie));
        dispatch(openModal(title));
    };

    return (
        <div
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemLeave}
            style={{ position: "relative" }}
        >
            <Poster
                imageUrl={movie.poster_path}
                alt={`${movie.title} poster`}
            />
            <MenuButton
                type="button"
                isVisible={isMenuButtonVisible}
                onClick={handleMenuButtonClick}
            >
                <img alt="menu button" src={contextMenuButton} />
            </MenuButton>
            <Menu isVisible={isMenuVisible}>
                <ButtonClose onClick={handleMenuButtonClick}>
                    <img src={CloseIcon} alt="close icon" />
                </ButtonClose>
                <li onClick={() => handleMenuItemClick(MODAL_TYPES.editMovie)}>
                    Edit
                </li>
                <li
                    onClick={() => handleMenuItemClick(MODAL_TYPES.deleteMovie)}
                >
                    Delete
                </li>
            </Menu>

            <Row>
                <div>
                    <h2 style={{ marginBottom: "8px" }}>{movie.title}</h2>
                    <p>{movie.genres.join(", ")}</p>
                </div>
                <Year>{movie.release_date}</Year>
            </Row>
        </div>
    );
}
