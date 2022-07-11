import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { moviesApi } from "../../api";
import { Genres, Movie, MoviesResponse } from "../../types/movies.types";
import { SORT_OPTIONS } from "../../constants";

interface MoviesState {
    moviesList: Movie[];
    moviesTotal: number;
    isSortedBy: SORT_OPTIONS | null;
    isFilteredBy: Genres | null;
}

const initialState: MoviesState = {
    moviesList: [],
    moviesTotal: null,
    isSortedBy: SORT_OPTIONS.releaseDate,
    isFilteredBy: null,
};

export const fetchAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async (): Promise<MoviesResponse> => {
        return await moviesApi.getAllMovies(
            "sortBy=release_date&sortOrder=desc&limit30"
        );
    }
);

export const fetchSortedMovies = createAsyncThunk(
    "movies/fetchSortedMovies",
    async (id: SORT_OPTIONS, thunkAPI): Promise<any> => {
        const res = await moviesApi.getAllMovies(
            `sortBy=${id}&sortOrder=desc&limit=30`
        );
        return thunkAPI.fulfillWithValue(res);
    }
);

export const fetchFilteredMovies = createAsyncThunk(
    "movies/fetchFilteredMovies",
    async (genre: Genres, thunkAPI): Promise<any> => {
        return await moviesApi.getAllMovies(
            `filter=${genre}&sortOrder=desc&limit=30`
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
        addCase(
            fetchSortedMovies.fulfilled,
            (state, { payload }: PayloadAction<MoviesResponse>) => {
                state.moviesList = payload.data;
                state.moviesTotal = payload.totalAmount;
            }
        );
        addCase(
            fetchFilteredMovies.fulfilled,
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
