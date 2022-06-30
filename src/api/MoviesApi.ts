import { MovieResponse } from "../types/movies.types";

class MoviesApi {
    private baseUrl: string = "http://localhost:4000";

    public getAllMovies(): Promise<MovieResponse> {
        return fetch(`${this.baseUrl}/movies`, {
            method: "GET",
        }).then((res) => res.json());
    }
}

export const moviesApi = new MoviesApi();
