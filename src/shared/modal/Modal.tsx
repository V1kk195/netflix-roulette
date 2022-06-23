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

type Props = {
    title: string;
    isVisible: boolean;
    modalCloseHandler: () => void;
    formId?: string;
    children: ReactNode;
};

export const Modal = ({
    title,
    isVisible,
    modalCloseHandler,
    formId,
    children,
}: Props): JSX.Element => {
    const handleClose = (e: any): void => {
        if (
            e.target.classList.contains("buttonClose") ||
            !e.target.closest(".modal")
        ) {
            modalCloseHandler();
        }
    };

    return (
        isVisible && (
            <Overlay isVisible={isVisible} onClick={handleClose}>
                <ModalContainer className="modal">
                    <ButtonClose
                        className="buttonClose"
                        type="button"
                        onClick={modalCloseHandler}
                    >
                        <img src={closeIcon} alt="close_button" />
                    </ButtonClose>
                    <h1>{title.toUpperCase()}</h1>

                    {children}

                    <ButtonsContainer>
                        <ButtonModal type="button">Reset</ButtonModal>
                        <ButtonModal type="submit" form={formId}>
                            Submit
                        </ButtonModal>
                    </ButtonsContainer>
                </ModalContainer>
            </Overlay>
        )
    );
};
