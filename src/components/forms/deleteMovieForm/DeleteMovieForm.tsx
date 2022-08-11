import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentMovie } from "../../../state/movies";
import {
    ButtonModal,
    ButtonsContainer,
} from "../../../shared/modal/Modal.styles";
import { Form } from "../../form";
import { MODAL_TYPES } from "../../../types/global.types";
import { moviesApi } from "../../../api";
import { closeModal } from "../../../state/modal/modalSlice";

export const DeleteMovieForm = (): JSX.Element => {
    const dispatch = useDispatch();

    const movieId = useSelector(selectCurrentMovie).id;

    const handleSubmit = () => {
        moviesApi.deleteMovie(movieId.toString()).then(() => {
            dispatch(closeModal());
        });
    };

    return (
        <Form id={MODAL_TYPES.deleteMovie} onSubmit={handleSubmit}>
            <p style={{ fontSize: "20px" }}>
                Are you sure you want to delete this movie?
            </p>

            <ButtonsContainer>
                <ButtonModal type="submit">Confirm</ButtonModal>
            </ButtonsContainer>
        </Form>
    );
};
