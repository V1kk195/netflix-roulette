export const GENRES = [
    { id: "default", name: "Select Genre" },
    { id: "crime", name: "crime" },
    { id: "documentary", name: "documentary" },
    { id: "horror", name: "horror" },
    { id: "comedy", name: "comedy" },
];

export enum SORT_OPTIONS {
    title = "title",
    genre = "genres",
    releaseDate = "release_date",
    rating = "vote_average",
    runtime = "runtime",
}
