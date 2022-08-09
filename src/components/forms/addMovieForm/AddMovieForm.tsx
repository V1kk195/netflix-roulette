import * as React from "react";
import { useFormik } from "formik";

import { Select } from "../../../shared/select";
import { Form } from "../../form";
import { GENRES } from "../../../constants";
import { MODAL_TYPES } from "../../../types/global.types";
import {
    Column,
    ColumnLarge,
    ErrorMessage,
    FieldContainer,
} from "../FormCommon.styles";
import { AddMovieFormValues, initialValues, validate } from "./validation";
import { moviesApi } from "../../../api";
import { getFormModifiedValues } from "../../../utils";
import { useAppDispatch } from "../../../state";
import { closeModal } from "../../../state/modal/modalSlice";

export const AddMovieForm = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const handleFormSubmit = (values: AddMovieFormValues) => {
        const modifiedValues = getFormModifiedValues(values, initialValues);

        moviesApi.createMovie(modifiedValues).then((data) => {
            console.log("data", data);
            dispatch(closeModal());
        });
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            handleFormSubmit(values);
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
