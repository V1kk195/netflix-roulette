import * as React from "react";
import { useState } from "react";

import "./App.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";
import { ErrorBoundary } from "../../shared/errorBoundary";
import { Modal } from "../../shared/modal";
import { AppContainer } from "./App.styles";
import { MODAL_TYPES } from "../../types/global.types";
import { AddMovieForm } from "../forms/addMovieForm";
import { EditMovieForm } from "../forms/editMovieForm";
import { DeleteMovieForm } from "../forms/deleteMovieForm";
import { AppContext } from "../../context";
import { Movie } from "../../types/movies.types";
import { useSelector } from "react-redux";
import { selectModalName } from "../../state/modal/modalSlice";

export function App(): JSX.Element {
    const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
    const modalName = useSelector(selectModalName);

    return (
        <ErrorBoundary>
            <AppContext.Provider
                value={{
                    movieDetails,
                    setMovieDetails,
                }}
            >
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
                        <Modal title={modalName}>
                            {modalName === MODAL_TYPES.addMovie && (
                                <AddMovieForm />
                            )}
                            {modalName === MODAL_TYPES.editMovie && (
                                <EditMovieForm />
                            )}
                            {modalName === MODAL_TYPES.deleteMovie && (
                                <DeleteMovieForm />
                            )}
                        </Modal>
                    </ErrorBoundary>
                </AppContainer>
            </AppContext.Provider>
        </ErrorBoundary>
    );
}
