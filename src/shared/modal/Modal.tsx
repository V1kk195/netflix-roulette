import * as React from "react";
import { ReactNode, useEffect, useState } from "react";

import {
    ButtonClose,
    ButtonModal,
    ButtonsContainer,
    ModalContainer,
    Overlay,
} from "./ModalStyles";
import closeIcon from "../../../public/assets/icons/close-button.svg";
import { forms, FormType } from "../../data/forms";
import { Form } from "../../components/addMovieForm";

type Props = {
    name: string;
    buttons?: ReactNode;
    isVisible: boolean;
    modalCloseHandler: () => void;
    formId?: string;
};

export const Modal = ({
    name,
    isVisible,
    modalCloseHandler,
    buttons,
    formId,
}: Props): JSX.Element => {
    const [content, setContent] = useState<FormType>();
    const getContent = (name: string): FormType => {
        return forms[name];
    };

    useEffect(() => {
        setContent(getContent(name));
    }, [name]);

    const handleClose = (e: any): void => {
        if (
            e.target.classList.contains("buttonClose") ||
            !e.target.closest(".modal")
        ) {
            modalCloseHandler();
        }
    };

    return (
        <Overlay isVisible={isVisible} onClick={handleClose}>
            <ModalContainer className="modal">
                <ButtonClose
                    className="buttonClose"
                    type="button"
                    onClick={modalCloseHandler}
                >
                    <img src={closeIcon} alt="close_button" />
                </ButtonClose>
                <h1>{content?.title}</h1>

                {content?.data && <Form data={content.data} />}

                <ButtonsContainer>
                    {buttons ? (
                        buttons
                    ) : (
                        <>
                            <ButtonModal type="button">Reset</ButtonModal>
                            <ButtonModal type="submit" form={formId}>
                                Submit
                            </ButtonModal>
                        </>
                    )}
                </ButtonsContainer>
            </ModalContainer>
        </Overlay>
    );
};
