import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { AppStore, RootState, setupStore } from "../state";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
}

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {
            movies: undefined,
            modal: undefined,
        },
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
