import * as React from "react";
import { Select } from "../../shared/select";
import { IdName, InputTypes } from "../../types/global.types";
import { Input } from "../../shared/input";
import { Field, Form, Label } from "./AddMovieFormStyles";

type FormField = {
    id: string;
    label: string;
    type: "input" | "select" | "checkbox";
    options?: IdName[];
    inputType?: InputTypes;
};

const formFields: FormField[] = [
    {
        id: "title",
        label: "title",
        type: "input",
        inputType: "text",
    },
    {
        id: "movieUrl",
        label: "movie url",
        type: "input",
        inputType: "url",
    },
    {
        id: "genre",
        label: "genre",
        type: "select",
        options: [
            { id: "crime", name: "crime" },
            { id: "documentary", name: "documentary" },
            { id: "horror", name: "horror" },
            { id: "comedy", name: "comedy" },
        ],
    },
    {
        id: "releaseDate",
        label: "release date",
        type: "input",
        inputType: "date",
    },
    {
        id: "rating",
        label: "rating",
        type: "input",
        inputType: "number",
    },
    {
        id: "runtime",
        label: "runtime",
        type: "input",
        inputType: "number",
    },
    {
        id: "overview",
        label: "overview",
        type: "input",
        inputType: "text",
    },
];

export const AddMovieForm = (): JSX.Element => {
    return (
        <Form>
            {formFields.map(
                ({ label, id, type, options, inputType }: FormField) => {
                    return (
                        <Field key={id}>
                            <Label>{label}</Label>
                            {type === "input" && <Input type={inputType} />}
                            {type === "select" && <Select options={options} />}
                        </Field>
                    );
                }
            )}
        </Form>
    );
};
