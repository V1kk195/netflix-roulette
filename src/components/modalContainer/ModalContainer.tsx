import * as React from "react";
import { useSelector } from "react-redux";

import { MODAL_TYPES } from "../../types/global.types";
import { AddMovieForm } from "../forms/addMovieForm";
import { EditMovieForm } from "../forms/editMovieForm";
import { DeleteMovieForm } from "../forms/deleteMovieForm";
import { Modal } from "../../shared/modal";
import { selectModalName } from "../../state/modal/modalSlice";

export const ModalContainer = (): JSX.Element => {
    const modalName = useSelector(selectModalName);

    return (
        <Modal title={modalName}>
            {modalName === MODAL_TYPES.addMovie && <AddMovieForm />}
            {modalName === MODAL_TYPES.editMovie && <EditMovieForm />}
            {modalName === MODAL_TYPES.deleteMovie && <DeleteMovieForm />}
        </Modal>
    );
};
