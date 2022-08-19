import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import React from "react";

import { AddMovieForm } from "./AddMovieForm";
import { renderWithProviders } from "../../../utils/test-utils";

const movieTitle = "zootopia";

describe("add movie form", () => {
    test("renders correctly", async () => {
        const user = userEvent.setup();

        renderWithProviders(<AddMovieForm />);

        const titleInput = screen.getByRole("textbox", {
            name: /title/i,
        });
        expect(titleInput).toHaveValue("");

        await user.type(titleInput, movieTitle);
        expect(titleInput).toHaveValue(movieTitle);
    });

    test("shows error messages", async () => {
        const user = userEvent.setup();

        renderWithProviders(<AddMovieForm />);

        const titleInput = screen.getByRole("textbox", {
            name: /title/i,
        });
        expect(titleInput).toHaveValue("");

        await user.click(titleInput);
        await user.type(
            screen.getByRole("textbox", {
                name: /movie url/i,
            }),
            "some url"
        );

        expect(screen.getByText(/must be a valid url/i)).toBeVisible();
        expect(screen.getAllByText(/required/i)).toHaveLength(4);
    });
});
