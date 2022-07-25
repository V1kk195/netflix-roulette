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

type Props = {
    title: string;
    image?: string;
    year: string;
    genres: string[];
};

export function MovieItem({ title, genres, image, year }: Props): JSX.Element {
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
        dispatch(openModal(title));
    };

    return (
        <div
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemLeave}
            style={{ position: "relative" }}
        >
            <Poster imageUrl={image} alt={`${title} poster`} />
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
                    <h2 style={{ marginBottom: "8px" }}>{title}</h2>
                    <p>{genres.join(", ")}</p>
                </div>
                <Year>{year}</Year>
            </Row>
        </div>
    );
}
