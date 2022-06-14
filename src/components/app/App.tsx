import * as React from "react";
import { useState } from "react";

import "./App.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { Modal } from "../../shared/modal";
import { AppContainer } from "./App.styles";
import { ModalName } from "../../types/global.types";

export function App(): JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState(false);
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
                        name={modalName}
                        isVisible={isModalVisible}
                        modalCloseHandler={handleModalOpenClose}
                    />
                </ErrorBoundary>
            </AppContainer>
        </ErrorBoundary>
    );
}
