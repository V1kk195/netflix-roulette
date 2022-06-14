import { FormField } from "../types/global.types";
import { ReactNode } from "react";

export type ButtonType = {
    title: string;
    type: "button" | "submit" | "reset";
};

export type FormType = {
    title: string;
    data: FormField[] | string;
    buttons?: ButtonType[];
};

type Forms = Record<string, FormType>;

export const forms: Forms = {
    addMovie: {
        title: "add movie",
        data: [
            {
                id: "title",
                label: "title",
                type: "input",
                inputType: "text",
                placeholder: "Movie",
            },
            {
                id: "movieUrl",
                label: "movie url",
                type: "input",
                inputType: "url",
                placeholder: "https://",
            },
            {
                id: "genre",
                label: "genre",
                type: "select",
                options: [
                    { id: "default", name: "Select Genre" },
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
                placeholder: "Select Date",
            },
            {
                id: "rating",
                label: "rating",
                type: "input",
                inputType: "number",
                placeholder: "7.8",
            },
            {
                id: "runtime",
                label: "runtime",
                type: "input",
                inputType: "number",
                placeholder: "minutes",
            },
            {
                id: "overview",
                label: "overview",
                type: "input",
                inputType: "text",
                placeholder: "Movie Description",
            },
        ],
    },
    editMovie: {
        title: "edit movie",
        data: [
            {
                id: "title",
                label: "title",
                type: "input",
                inputType: "text",
                placeholder: "Movie",
            },
            {
                id: "movieUrl",
                label: "movie url",
                type: "input",
                inputType: "url",
                placeholder: "https://",
            },
            {
                id: "genre",
                label: "genre",
                type: "select",
                options: [
                    { id: "default", name: "Select Genre" },
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
                placeholder: "Select Date",
            },
            {
                id: "rating",
                label: "rating",
                type: "input",
                inputType: "number",
                placeholder: "7.8",
            },
            {
                id: "runtime",
                label: "runtime",
                type: "input",
                inputType: "number",
                placeholder: "minutes",
            },
            {
                id: "overview",
                label: "overview",
                type: "input",
                inputType: "text",
                placeholder: "Movie Description",
            },
        ],
    },
    deleteMovie: {
        title: "delete movie",
        data: "Are you sure you want to delete this movie?",
        buttons: [
            {
                title: "confirm",
                type: "button",
            },
        ],
    },
};