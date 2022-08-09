import { isValidUrl } from "../../../utils";
import { isNaN } from "formik";
import { Genres } from "../../../types/movies.types";

export interface AddMovieFormValues {
    title: string;
    poster_path: string;
    genres: Genres;
    release_date: string;
    vote_average: string;
    runtime: string;
    overview: string;
}

export const validate = (
    values: AddMovieFormValues
): Partial<Record<keyof AddMovieFormValues, string>> => {
    const errors: Partial<Record<keyof AddMovieFormValues, string>> = {};

    if (!values.title) {
        errors.title = "Required";
    }

    if (!values.poster_path) {
        errors.poster_path = "Required";
    } else if (!isValidUrl(values.poster_path)) {
        errors.poster_path = "Must be a valid URL";
    }

    if (!values.overview) {
        errors.overview = "Required";
    }

    if (!values.runtime) {
        errors.runtime = "Required";
    } else if (!Number.isInteger(values.runtime)) {
        errors.runtime = "Must be an integer";
    }

    if (!values.genres) {
        errors.genres = "Required";
    }

    if (isNaN(values.vote_average)) {
        errors.vote_average = "Must be an number";
    }

    return errors;
};

export const initialValues: AddMovieFormValues = {
    title: "",
    poster_path: "",
    genres: "",
    release_date: "",
    vote_average: "",
    runtime: "",
    overview: "",
};
