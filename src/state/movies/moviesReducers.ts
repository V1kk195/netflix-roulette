import { ActionReducerMapBuilder } from "@reduxjs/toolkit/dist/mapBuilders";
import {
    fetchAllMovies,
    fetchFilteredMovies,
    fetchSortedMovies,
} from "./moviesThunks";
import { MoviesState } from "./moviesSlice";

export const fetchAllMoviesReducer = ({
    addCase,
}: ActionReducerMapBuilder<MoviesState>) => {
    addCase(fetchAllMovies.pending, (state, action) => {
        if (state.loading === "idle") {
            state.loading = "pending";
            state.currentRequestId = action.meta.requestId;
        }
    });
    addCase(fetchAllMovies.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.moviesList = action.payload.data;
            state.moviesTotal = action.payload.totalAmount;
            state.currentRequestId = undefined;
        }
    });
    addCase(fetchAllMovies.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.error = action.error;
            state.currentRequestId = undefined;
        }
    });
};

export const fetchSortedMoviesReducer = ({
    addCase,
}: ActionReducerMapBuilder<MoviesState>) => {
    addCase(fetchSortedMovies.pending, (state, action) => {
        if (state.loading === "idle") {
            state.loading = "pending";
            state.currentRequestId = action.meta.requestId;
        }
    });
    addCase(fetchSortedMovies.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.moviesList = action.payload.data;
            state.moviesTotal = action.payload.totalAmount;
            state.currentRequestId = undefined;
        }
    });
    addCase(fetchSortedMovies.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.error = action.error;
            state.currentRequestId = undefined;
        }
    });
};

export const fetchFilteredMoviesReducer = ({
    addCase,
}: ActionReducerMapBuilder<MoviesState>) => {
    addCase(fetchFilteredMovies.pending, (state, action) => {
        if (state.loading === "idle") {
            state.loading = "pending";
            state.currentRequestId = action.meta.requestId;
        }
    });
    addCase(fetchFilteredMovies.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.moviesList = action.payload.data;
            state.moviesTotal = action.payload.totalAmount;
            state.currentRequestId = undefined;
        }
    });
    addCase(fetchFilteredMovies.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
            state.loading === "pending" &&
            state.currentRequestId === requestId
        ) {
            state.loading = "idle";
            state.error = action.error;
            state.currentRequestId = undefined;
        }
    });
};
