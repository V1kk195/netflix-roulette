export type Movie = {
    title: string;
    vote_average?: number;
    release_date?: string;
    poster_path: string;
    overview: string;
    revenue?: number;
    runtime: number;
    genres?: Genres[];
    id?: number;
};

export type MoviesResponse = {
    data: Movie[];
    totalAmount: number;
    offset: number;
    limit: number;
};

export type Genres = "" | "Comedy" | "Documentary" | "Horror" | "Crime";
