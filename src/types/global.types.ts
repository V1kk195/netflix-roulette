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

export enum MODAL_TYPES {
    addMovie = "add movie",
    editMovie = "edit movie",
    deleteMovie = "delete movie",
}

export type ModalName =
    | MODAL_TYPES.addMovie
    | MODAL_TYPES.editMovie
    | MODAL_TYPES.deleteMovie;
