import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Genres, Movie } from "../../types/movies.types";
import { SORT_OPTIONS } from "../../constants";
import {
    fetchAllMoviesReducer,
    fetchFilteredMoviesReducer,
    fetchSortedMoviesReducer,
} from "./moviesReducers";

export interface MoviesState {
    moviesList: Movie[];
    moviesTotal: number;
    isSortedBy: SORT_OPTIONS | null;
    isFilteredBy: Genres | null;
    movieDetails: Movie;
    loading: string;
    currentRequestId: string;
    error: null | SerializedError;
}

const initialState: MoviesState = {
    moviesList: [],
    moviesTotal: null,
    isSortedBy: SORT_OPTIONS.releaseDate,
    isFilteredBy: null,
    movieDetails: null,
    loading: "idle",
    currentRequestId: undefined,
    error: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        openMovieDetails: (state, { payload }: PayloadAction<Movie>) => {
            state.movieDetails = payload;
        },
        closeMovieDetails: (state) => {
            state.movieDetails = null;
        },
    },
    extraReducers: (builder) => {
        fetchAllMoviesReducer(builder);
        fetchFilteredMoviesReducer(builder);
        fetchSortedMoviesReducer(builder);
        // addCase(fetchAllMovies.pending, (state, action) => {
        //     if (state.loading === "idle") {
        //         state.loading = "pending";
        //         state.currentRequestId = action.meta.requestId;
        //     }
        // });
        // addCase(fetchAllMovies.fulfilled, (state, action) => {
        //     const { requestId } = action.meta;
        //     if (
        //         state.loading === "pending" &&
        //         state.currentRequestId === requestId
        //     ) {
        //         state.loading = "idle";
        //         state.moviesList = action.payload.data;
        //         state.moviesTotal = action.payload.totalAmount;
        //         state.currentRequestId = undefined;
        //     }
        // });
        // addCase(fetchAllMovies.rejected, (state, action) => {
        //     const { requestId } = action.meta;
        //     if (
        //         state.loading === "pending" &&
        //         state.currentRequestId === requestId
        //     ) {
        //         state.loading = "idle";
        //         state.error = action.error;
        //         state.currentRequestId = undefined;
        //     }
        // });
        // builder.addCase(
        //     fetchSortedMovies.fulfilled,
        //     (state, { payload }: PayloadAction<MoviesResponse>) => {
        //         state.moviesList = payload.data;
        //         state.moviesTotal = payload.totalAmount;
        //     }
        // );
        // builder.addCase(
        //     fetchFilteredMovies.fulfilled,
        //     (state, { payload }: PayloadAction<MoviesResponse>) => {
        //         state.moviesList = payload.data;
        //         state.moviesTotal = payload.totalAmount;
        //     }
        // );
    },
});

export default moviesSlice.reducer;
export const { openMovieDetails, closeMovieDetails } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.moviesList;
export const selectMoviesTotal = (state: RootState) => state.movies.moviesTotal;
export const selectMovieDetails = (state: RootState) =>
    state.movies.movieDetails;
