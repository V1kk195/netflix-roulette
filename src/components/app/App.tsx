import * as React from "react";
import styled from "styled-components";

import "./App.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";
import { ErrorBoundary } from "../../shared/errorBoundary";

export function App() {
    const App = styled.div`
        background-color: #232323;
        max-width: 1200px;
        margin: 0 auto;
    `;
    //TODO add layout components
    return (
        <ErrorBoundary>
            <App className="app">
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Main />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </App>
        </ErrorBoundary>
    );
}
