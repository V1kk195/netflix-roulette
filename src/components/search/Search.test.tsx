import * as React from "react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/test-utils";
import { Search } from "./Search";

// const server = setupServer(
//     rest.get("/movies?searchBy=title&search=titanic", (req, res, ctx) => {
//         return res(
//             ctx.json({
//                 totalAmount: 1,
//                 data: [
//                     {
//                         id: 597,
//                         title: "Titanic",
//                         tagline: "Nothing on Earth could come between them.",
//                         vote_average: 7.6,
//                         vote_count: 9832,
//                         release_date: "1997-11-18",
//                         poster_path:
//                             "https://image.tmdb.org/t/p/w500/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
//                         overview:
//                             "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
//                         budget: 200000000,
//                         revenue: 1845034188,
//                         genres: ["Drama", "Romance", "Thriller"],
//                         runtime: 194,
//                     },
//                 ],
//                 offset: 0,
//                 limit: 10,
//             })
//         );
//     })
// );
//
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("renders search panel", () => {
    test("shows typed value", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Search />);

        await user.type(screen.getByRole("textbox"), "titanic");
        await expect(screen.getByRole("textbox")).toHaveValue("titanic");
    });

    test("shows the same typed value after submit", async () => {
        const user = userEvent.setup();
        renderWithProviders(<Search />);

        await user.type(screen.getByRole("textbox"), "titanic");
        await user.click(
            screen.getByRole("button", {
                name: /search/i,
            })
        );

        expect(screen.getByRole("textbox")).toHaveValue("titanic");
    });
});
