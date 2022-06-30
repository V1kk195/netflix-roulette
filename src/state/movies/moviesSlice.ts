import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { moviesApi } from "../../api";
import { Movie } from "../../types/movies.types";

interface MoviesState {
    moviesList: Movie[];
}

const initialState: MoviesState = {
    moviesList: [],
};

export const fetchAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async () => {
        const response = await moviesApi.getAllMovies();
        return response.data;
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchAllMovies.fulfilled, (state, action) => {
            state.moviesList = action.payload;
        });
    },
});

export default moviesSlice.reducer;
export const {} = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies.moviesList;
