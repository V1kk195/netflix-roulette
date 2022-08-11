import { Movie, MoviesResponse } from "../types/movies.types";

class MoviesApi {
    private baseUrl: string = "http://localhost:4000";

    public getAllMovies(parameters?: string): Promise<MoviesResponse> {
        const path = parameters ? `movies?${parameters}` : `movies`;

        return fetch(`${this.baseUrl}/${path}`, {
            method: "GET",
        }).then((res) => res.json());
    }

    public createMovie(body: Movie): Promise<Movie> {
        return fetch(`${this.baseUrl}/movies`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then((res) => res.json());
    }

    public updateMovie(body: Movie): Promise<Movie> {
        return fetch(`${this.baseUrl}/movies`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }).then((res) => res.json());
    }
}

export const moviesApi = new MoviesApi();
