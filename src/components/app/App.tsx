import * as React from "react";

import "./App.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { AppContainer } from "./App.styles";
import { ModalContainer } from "../modalContainer";

export function App(): JSX.Element {
    return (
        <ErrorBoundary>
            <AppContainer className="app">
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Main />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>

                <ErrorBoundary>
                    <ModalContainer />
                </ErrorBoundary>
            </AppContainer>
        </ErrorBoundary>
    );
}
