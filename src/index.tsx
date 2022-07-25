import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./components/app";
import { GlobalStyle } from "./global.css.js";
import { store } from "./state";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>
);
