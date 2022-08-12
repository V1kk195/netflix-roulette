import * as React from "react";
import { ButtonSearch, FormElem, InputElem } from "./Search.styles";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

export function Search(): JSX.Element {
    const { searchQuery } = useParams();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { search: searchQuery },
        onSubmit: (values) => {
            if (searchQuery) {
                navigate(`/search/${values.search}`, { replace: true });
            } else {
                navigate(`${values.search}`, { replace: true });
            }
        },
    });

    return (
        <FormElem onSubmit={formik.handleSubmit}>
            <InputElem
                as="input"
                id="search"
                onChange={formik.handleChange}
                defaultValue={formik.values.search || ""}
                type="text"
                placeholder="What do you want to watch?"
            />
            <ButtonSearch type="submit">SEARCH</ButtonSearch>
        </FormElem>
    );
}
