export type Movie = {
    id: string;
    title: string;
    year: string;
    image: string;
    genres: string[];
};

export type IdName = {
    id: string;
    name: string;
};

export type InputTypes = "text" | "url" | "number" | "date";
