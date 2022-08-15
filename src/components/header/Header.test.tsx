import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/test-utils";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe("renders header", () => {
    test("renders all elements", () => {
        renderWithProviders(<Header />);

        expect(screen.getByAltText(/netflix roulette logo/i)).toBeVisible();
        expect(
            screen.getByRole("heading", {
                name: /find your movie/i,
            })
        ).toBeVisible();
        expect(screen.getByRole("textbox")).toBeVisible();
        expect(
            screen.getByRole("button", {
                name: /search/i,
            })
        ).toBeVisible();
    });

    test("toggle modal state on click 'Add movie' button", async () => {
        const user = userEvent.setup();
        const { store } = renderWithProviders(<Header />);

        expect(store.getState().modal.name).toEqual(null);

        await user.click(screen.getByRole("button", { name: /\+ Add movie/i }));

        expect(store.getState().modal.name).toEqual("add movie");
    });
});
