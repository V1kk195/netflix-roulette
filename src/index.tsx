import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";

import { App } from "./components/app";
import { GlobalStyle } from "./global.css.js";
import { store } from "./state";
import { NotFound } from "./components/notFound";

export const LocationContainer = () => {
    const location = useLocation();

    return (
        <div style={{ display: "none" }} data-testid="location-container">
            {location.pathname}
        </div>
    );
};

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
                    <Route path="search">
                        <Route path=":searchQuery" element={<App />} />
                        <Route index element={<App />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <LocationContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
