import { MoviesResponse } from "../types/movies.types";

class MoviesApi {
    private baseUrl: string = "http://localhost:4000";

    public getAllMovies(parameters?: string): Promise<MoviesResponse> {
        const path = parameters ? `movies?${parameters}` : `movies`;
        return fetch(`${this.baseUrl}/${path}`, {
            method: "GET",
        }).then((res) => res.json());
    }
}

export const moviesApi = new MoviesApi();
