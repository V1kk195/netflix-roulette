import * as React from "react";
import { useState } from "react";

import "./App.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { Modal } from "../../shared/modal";
import { AppContainer } from "./App.styles";
import { MODAL_TYPES, ModalName } from "../../types/global.types";
import { AddMovieForm } from "../forms/addMovieForm";
import { EditMovieForm } from "../forms/editMovieForm";
import { DeleteMovieForm } from "../forms/deleteMovieForm";

export function App(): JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [modalName, setModalName] = useState<ModalName>();

    const handleModalOpenClose = (): void => {
        setIsModalVisible((prevState) => !prevState);
    };

    return (
        <ErrorBoundary>
            <AppContainer className="app">
                <ErrorBoundary>
                    <Header
                        modalOpenHandler={handleModalOpenClose}
                        setModalName={setModalName}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Main
                        modalOpenHandler={handleModalOpenClose}
                        setModalName={setModalName}
                    />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Modal
                        title={modalName}
                        isVisible={isModalVisible}
                        modalCloseHandler={handleModalOpenClose}
                    >
                        {modalName === MODAL_TYPES.addMovie && <AddMovieForm />}
                        {modalName === MODAL_TYPES.editMovie && (
                            <EditMovieForm />
                        )}
                        {modalName === MODAL_TYPES.deleteMovie && (
                            <DeleteMovieForm />
                        )}
                    </Modal>
                </ErrorBoundary>
            </AppContainer>
        </ErrorBoundary>
    );
}
