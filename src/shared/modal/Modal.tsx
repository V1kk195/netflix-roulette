import * as React from "react";
import { ReactNode } from "react";

import {
    ButtonClose,
    ButtonModal,
    ButtonsContainer,
    ModalContainer,
    Overlay,
} from "./Modal.styles";
import closeIcon from "../../../public/assets/icons/close-button.svg";
import { useAppDispatch } from "../../state";
import { closeModal } from "../../state/modal/modalSlice";
import { MODAL_TYPES } from "../../types/global.types";

type Props = {
    title: MODAL_TYPES | null;
    formId?: string;
    children: ReactNode;
};

export const Modal = ({ title, children }: Props): JSX.Element => {
    const dispatch = useAppDispatch();

    const handleClose = (e: any): void => {
        if (
            e.target.classList.contains("buttonClose") ||
            !e.target.closest(".modal")
        ) {
            dispatch(closeModal());
        }
    };

    return (
        !!title && (
            <Overlay isVisible={!!title} onClick={handleClose}>
                <ModalContainer className="modal">
                    <ButtonClose
                        className="buttonClose"
                        type="button"
                        onClick={() => dispatch(closeModal())}
                    >
                        <img src={closeIcon} alt="close_button" />
                    </ButtonClose>
                    <h1>{title.toUpperCase()}</h1>

                    {children}

                    <ButtonsContainer>
                        <ButtonModal type="button">Reset</ButtonModal>
                        <ButtonModal type="submit" form={title}>
                            Submit
                        </ButtonModal>
                    </ButtonsContainer>
                </ModalContainer>
            </Overlay>
        )
    );
};
