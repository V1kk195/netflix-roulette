import * as React from "react";
import { isInteger, isNaN, useFormik } from "formik";

import { Select } from "../../../shared/select";
import { Form } from "../../form";
import { GENRES } from "../../../constants";
import { MODAL_TYPES } from "../../../types/global.types";
import { isValidUrl } from "../../../utils";
import {
    Column,
    ColumnLarge,
    ErrorMessage,
    FieldContainer,
} from "../FormCommon.styles";

interface AddMovieFormValues {
    title: string;
    movieUrl: string;
    genre: string;
    releaseDate: string;
    rating: string;
    runtime: string;
    overview: string;
}

const validate = (values: AddMovieFormValues): Partial<AddMovieFormValues> => {
    const errors: Partial<AddMovieFormValues> = {};

    if (!values.title) {
        errors.title = "Required";
    }

    if (!values.movieUrl) {
        errors.movieUrl = "Required";
    } else if (!isValidUrl(values.movieUrl)) {
        errors.movieUrl = "Must be a valid URL";
    }

    if (!values.overview) {
        errors.overview = "Required";
    }

    if (!values.runtime) {
        errors.runtime = "Required";
    } else if (!isInteger(values.runtime)) {
        errors.runtime = "Must be an integer";
    }

    if (!values.genre) {
        errors.genre = "Required";
    }

    if (isNaN(values.rating)) {
        errors.rating = "Must be an number";
    }

    return errors;
};

const initialValues: AddMovieFormValues = {
    title: "",
    movieUrl: "",
    genre: "",
    releaseDate: "",
    rating: "",
    runtime: "",
    overview: "",
};

export const AddMovieForm = (): JSX.Element => {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form id={MODAL_TYPES.addMovie} onSubmit={formik.handleSubmit}>
            <Column>
                <FieldContainer>
                    <label htmlFor="title">title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Movie"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    {formik.errors.title ? (
                        <ErrorMessage>{formik.errors.title}</ErrorMessage>
                    ) : null}
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="movieUrl">movie url</label>
                    <input
                        id="movieUrl"
                        type="url"
                        placeholder="https://"
                        onChange={formik.handleChange}
                        value={formik.values.movieUrl}
                    />{" "}
                    {formik.errors.movieUrl ? (
                        <ErrorMessage>{formik.errors.movieUrl}</ErrorMessage>
                    ) : null}
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="genre">genre</label>
                    <Select
                        options={GENRES}
                        id="genre"
                        onChange={(value) =>
                            formik.setFieldValue("genre", value)
                        }
                    />
                    {formik.errors.genre ? (
                        <ErrorMessage>{formik.errors.genre}</ErrorMessage>
                    ) : null}
                </FieldContainer>
            </Column>

            <Column>
                <FieldContainer>
                    <label htmlFor="releaseDate">release date</label>
                    <input
                        id="releaseDate"
                        type="date"
                        placeholder="Select Date"
                        onChange={formik.handleChange}
                        value={formik.values.releaseDate}
                    />
                    {formik.errors.releaseDate ? (
                        <ErrorMessage>{formik.errors.releaseDate}</ErrorMessage>
                    ) : null}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="rating">rating</label>
                    <input
                        id="rating"
                        type="number"
                        placeholder="7.8"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                    />
                    {formik.errors.rating ? (
                        <ErrorMessage>{formik.errors.rating}</ErrorMessage>
                    ) : null}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="runtime">runtime</label>
                    <input
                        id="runtime"
                        type="number"
                        placeholder="minutes"
                        onChange={formik.handleChange}
                        value={formik.values.runtime}
                    />
                    {formik.errors.runtime ? (
                        <ErrorMessage>{formik.errors.runtime}</ErrorMessage>
                    ) : null}
                </FieldContainer>
            </Column>

            <ColumnLarge>
                <FieldContainer>
                    <label htmlFor="overview">overview</label>
                    <textarea
                        id="overview"
                        placeholder="Movie Description"
                        onChange={formik.handleChange}
                        value={formik.values.overview}
                        rows={6}
                    />
                    {formik.errors.overview ? (
                        <ErrorMessage>{formik.errors.overview}</ErrorMessage>
                    ) : null}
                </FieldContainer>
            </ColumnLarge>
        </Form>
    );
};
