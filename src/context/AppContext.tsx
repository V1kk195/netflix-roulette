import * as React from "react";

export const app: Record<string, any> = {
    movieDetails: null,
    setMovieDetails: null,
};

export const AppContext = React.createContext(app);
