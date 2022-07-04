import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { moviesApi } from "../../api";
import { Movie, MoviesResponse } from "../../types/movies.types";

interface MoviesState {
    moviesList: Movie[];
    moviesTotal: number;
}

const initialState: MoviesState = {
    moviesList: [],
    moviesTotal: null,
};

export const fetchAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async (): Promise<MoviesResponse> => {
        return await moviesApi.getAllMovies(
            "sortBy=release_date&sortOrder=desc"
        );
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(
            fetchAllMovies.fulfilled,
            (state, { payload }: PayloadAction<MoviesResponse>) => {
                state.moviesList = payload.data;
                state.moviesTotal = payload.totalAmount;
            }
        );
    },
});

export default moviesSlice.reducer;
export const {} = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.moviesList;
export const selectMoviesTotal = (state: RootState) => state.movies.moviesTotal;
