import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { App } from "./components/app";
import { GlobalStyle } from "./global.css.js";
import { store } from "./state";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyle />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/search" replace={true} />}
                    />
                    <Route path="search" element={<App />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
