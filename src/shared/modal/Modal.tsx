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
import { ButtonType, forms, FormType } from "../../data/forms";
import { Form } from "../../components/addMovieForm";

type Props = {
    name: string;
    isVisible: boolean;
    modalCloseHandler: () => void;
    formId?: string;
};

export const Modal = ({
    name,
    isVisible,
    modalCloseHandler,
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

                {content?.data && typeof content.data !== "string" && (
                    <Form data={content.data} />
                )}

                {content?.data && typeof content.data === "string" && (
                    <p style={{ fontSize: "20px" }}>{content.data}</p>
                )}

                <ButtonsContainer>
                    {content?.buttons ? (
                        content.buttons.map(({ title, type }: ButtonType) => {
                            return (
                                <ButtonModal key={title} type={type}>
                                    {title}
                                </ButtonModal>
                            );
                        })
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
