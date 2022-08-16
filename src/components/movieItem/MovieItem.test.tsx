import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../utils/test-utils";
import { MovieItem } from "./MovieItem";
import { Movie } from "../../types/movies.types";

const movie = {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: "2018-02-07",
    poster_path:
        "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview:
        "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: ["Drama", "Romance"],
    runtime: 106,
};

describe("movie card", () => {
    test("renders correctly", async () => {
        const user = userEvent.setup();

        renderWithProviders(<MovieItem movie={movie as Movie} />);

        const movieElem = screen.getByRole("img", {
            name: /fifty shades freed poster/i,
        });

        await user.hover(movieElem);
        const menuButton = screen.getByRole("button", {
            name: /menu button/i,
        });
        expect(menuButton).toBeVisible();

        await user.click(menuButton);
        expect(screen.getByRole("list")).toBeVisible();

        await user.click(
            screen.getByRole("button", {
                name: /close icon/i,
            })
        );
        await waitFor(() =>
            expect(screen.queryByRole("list")).not.toBeInTheDocument()
        );
    });
});
