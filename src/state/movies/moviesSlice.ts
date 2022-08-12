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
    currentMovie: Movie;
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
    currentMovie: null,
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
        setCurrentMovie: (state, action: PayloadAction<Movie>) => {
            state.currentMovie = action.payload;
        },
    },
    extraReducers: (builder) => {
        fetchAllMoviesReducer(builder);
        fetchFilteredMoviesReducer(builder);
        fetchSortedMoviesReducer(builder);
    },
});

export default moviesSlice.reducer;
export const { openMovieDetails, closeMovieDetails, setCurrentMovie } =
    moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.moviesList;
export const selectMoviesTotal = (state: RootState) => state.movies.moviesTotal;
export const selectMovieDetails = (state: RootState) =>
    state.movies.movieDetails;
export const selectCurrentMovie = (state: RootState) =>
    state.movies.currentMovie;
