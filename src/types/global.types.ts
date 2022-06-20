export type Movie = {
    id: string;
    title: string;
    year: string;
    image: string;
    genres: string[];
    imDbRating?: string;
    crew?: string;
};

export type IdName = {
    id: string;
    name: string;
};

export type InputTypes = "text" | "url" | "number" | "date";

export type ModalName = "addMovie" | "editMovie" | "deleteMovie";

export type FormField = {
    id: string;
    label: string;
    type: "input" | "select" | "checkbox";
    options?: IdName[];
    inputType?: InputTypes;
    placeholder?: string;
};
