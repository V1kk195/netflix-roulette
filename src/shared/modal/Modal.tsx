import * as React from "react";
import { ReactNode } from "react";

import { ButtonModal, ModalContainer, Overlay } from "./ModalStyles";

type Props = {
    title: string;
    buttonCloseHandler?: () => void;
    buttons?: ReactNode;
    children: ReactNode;
};

export const Modal = ({ title, children }: Props): JSX.Element => {
    return (
        <Overlay>
            <ModalContainer>
                <h1>{title}</h1>
                {children}
                <div>
                    <ButtonModal type="button">Reset</ButtonModal>
                    <ButtonModal type="submit">Submit</ButtonModal>
                </div>
            </ModalContainer>
        </Overlay>
    );
};
