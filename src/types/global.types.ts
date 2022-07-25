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
