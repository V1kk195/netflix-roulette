import * as React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app";
import { GlobalStyle } from "./global.css.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
