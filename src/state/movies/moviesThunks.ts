import { createAsyncThunk } from "@reduxjs/toolkit";
import { Genres, MoviesResponse } from "../../types/movies.types";
import { moviesApi } from "../../api";
import { SORT_OPTIONS } from "../../constants";

const conditionFetchIfNeeded = (stateField: string, getState: () => any) => {
    const state = getState();
    const fetchStatus = state[stateField].loading;
    if (fetchStatus === "pending") {
        return false;
    }
};

export const fetchAllMovies = createAsyncThunk(
    "movies/fetchAllMovies",
    async (): Promise<MoviesResponse> => {
        return await moviesApi.getAllMovies(
            "sortBy=release_date&sortOrder=desc&limit30"
        );
    },
    {
        condition: (arg, { getState }) =>
            conditionFetchIfNeeded("movies", getState),
    }
);

export const fetchSortedMovies = createAsyncThunk(
    "movies/fetchSortedMovies",
    async (id: SORT_OPTIONS, thunkAPI): Promise<any> => {
        return await moviesApi.getAllMovies(
            `sortBy=${id}&sortOrder=desc&limit=30`
        );
    },
    {
        condition: (arg, { getState }) =>
            conditionFetchIfNeeded("movies", getState),
    }
);

export const fetchFilteredMovies = createAsyncThunk(
    "movies/fetchFilteredMovies",
    async (genre: Genres, thunkAPI): Promise<any> => {
        return await moviesApi.getAllMovies(
            `filter=${genre}&sortOrder=desc&limit=30`
        );
    },
    {
        condition: (arg, { getState }) =>
            conditionFetchIfNeeded("movies", getState),
    }
);
