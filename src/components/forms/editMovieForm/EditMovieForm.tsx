import * as React from "react";
import { isNaN, useFormik } from "formik";

import { Select } from "../../../shared/select";
import { Form } from "../../form";
import { GENRES } from "../../../constants";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "../../../state/movies";
import { getFormModifiedValues, isValidUrl } from "../../../utils";
import { Movie } from "../../../types/movies.types";
import { MODAL_TYPES } from "../../../types/global.types";
import { moviesApi } from "../../../api";
import { closeModal } from "../../../state/modal/modalSlice";
import { useAppDispatch } from "../../../state";
import {
    Column,
    ColumnLarge,
    ErrorMessage,
    FieldContainer,
} from "../FormCommon.styles";

const validate = (values: Movie) => {
    const errors: Partial<Record<keyof Movie, string>> = {};

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

export const EditMovieForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const movie = useSelector(selectCurrentMovie);

    const handleFormSubmit = (values: Movie) => {
        moviesApi.updateMovie({ ...values, id: movie.id }).then((data) => {
            dispatch(closeModal());
        });
    };

    const formik = useFormik({
        initialValues: movie,
        validate,
        onSubmit: (values) => {
            handleFormSubmit(values);
        },
    });

    return (
        <Form id={MODAL_TYPES.editMovie} onSubmit={formik.handleSubmit}>
            <Column>
                <FieldContainer>
                    <label htmlFor="title">title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Movie"
                        onChange={formik.handleChange}
                        value={formik.values.title || ""}
                    />
                    {formik.errors.title ? (
                        <ErrorMessage>{formik.errors.title}</ErrorMessage>
                    ) : null}
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="poster_path">movie url</label>
                    <input
                        id="poster_path"
                        type="url"
                        placeholder="https://"
                        onChange={formik.handleChange}
                        value={formik.values.poster_path || ""}
                    />
                    {formik.errors.poster_path ? (
                        <ErrorMessage>{formik.errors.poster_path}</ErrorMessage>
                    ) : null}
                </FieldContainer>

                <FieldContainer>
                    <label htmlFor="genres">genre</label>
                    <Select
                        options={GENRES}
                        id="genres"
                        onChange={(value) =>
                            formik.setFieldValue("genres", [value])
                        }
                    />
                    {formik.errors.genres ? (
                        <ErrorMessage>{formik.errors.genres}</ErrorMessage>
                    ) : null}
                </FieldContainer>
            </Column>

            <Column>
                <FieldContainer>
                    <label htmlFor="release_date">release date</label>
                    <input
                        id="release_date"
                        type="date"
                        placeholder="Select Date"
                        onChange={formik.handleChange}
                        value={formik.values.release_date || ""}
                    />
                    {formik.errors.release_date ? (
                        <ErrorMessage>
                            {formik.errors.release_date}
                        </ErrorMessage>
                    ) : null}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="vote_average">rating</label>
                    <input
                        id="vote_average"
                        type="number"
                        placeholder="7.8"
                        onChange={formik.handleChange}
                        value={formik.values.vote_average || ""}
                    />
                    {formik.errors.vote_average ? (
                        <ErrorMessage>
                            {formik.errors.vote_average}
                        </ErrorMessage>
                    ) : null}
                </FieldContainer>
                <FieldContainer>
                    <label htmlFor="runtime">runtime</label>
                    <input
                        id="runtime"
                        type="number"
                        placeholder="minutes"
                        onChange={formik.handleChange}
                        value={formik.values.runtime || ""}
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
                        value={formik.values.overview || ""}
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
