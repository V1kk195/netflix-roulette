import {
    combineReducers,
    configureStore,
    PreloadedState,
} from "@reduxjs/toolkit";

import moviesReducer from "./movies/moviesSlice";
import modalReducer from "./modal/modalSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        modal: modalReducer,
    },
});

const rootReducer = combineReducers({
    movies: moviesReducer,
    modal: modalReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
