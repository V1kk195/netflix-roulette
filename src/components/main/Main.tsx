import * as React from "react";
import styled from "styled-components";
import { MoviesList } from "../moviesList";
import { Filters } from "../filters";
import { Movie } from "../../types/global.types";

const categories = ["comedy", "documentary", "horror", "crime"];

const movies: Movie[] = [
    {
        id: "tt0111161",
        title: "The Shawshank Redemption",
        year: "1994",
        image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["comedy"],
    },
    {
        id: "tt0068646",
        title: "The Godfather",
        year: "1972",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        genres: ["comedy"],
    },
    {
        id: "tt0468569",
        title: "The Dark Knight",
        year: "2008",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["comedy"],
    },
    {
        id: "tt0071562",
        title: "The Godfather: Part II",
        year: "1974",
        image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        genres: ["comedy"],
    },
    {
        id: "tt0050083",
        title: "12 Angry Men",
        year: "1957",
        image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["comedy", "crime"],
    },
    {
        id: "tt0108052",
        title: "Schindler's List",
        year: "1993",
        image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0167260",
        title: "The Lord of the Rings: The Return of the King",
        year: "2003",
        image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0110912",
        title: "Pulp Fiction",
        year: "1994",
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0120737",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: "2001",
        image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0060196",
        title: "The Good, the Bad and the Ugly",
        year: "1966",
        image: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0109830",
        title: "Forrest Gump",
        year: "1994",
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["documentary"],
    },
    {
        id: "tt0137523",
        title: "Fight Club",
        year: "1999",
        image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["horror", "comedy"],
    },
    {
        id: "tt1375666",
        title: "Inception",
        year: "2010",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["crime", "documentary"],
    },
    {
        id: "tt0167261",
        title: "The Lord of the Rings: The Two Towers",
        year: "2002",
        image: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        genres: ["crime", "documentary"],
    },
];

export function Main(): JSX.Element {
    const Main = styled.div`
        background-color: #232323;
        margin-top: 10px;
        padding: 0 60px 75px;
    `;

    return (
        <Main>
            <Filters categories={categories} />
            <MoviesList movies={movies} />
        </Main>
    );
}
