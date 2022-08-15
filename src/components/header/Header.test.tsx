import * as React from "react";
import { screen, waitFor } from "@testing-library/react";

import { renderWithProviders } from "../../utils/test-utils";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe("renders header", () => {
    test("opens add movie modal on click 'Add movie' button", async () => {
        const user = userEvent.setup();

        renderWithProviders(<Header />);

        expect(screen.getByAltText(/netflix roulette logo/i)).toBeVisible();

        await user.click(screen.getByRole("button", { name: /\+ Add movie/i }));
        // expect(await screen.findByText("ADD MOVIE")).toBeVisible();

        await waitFor(() => {
            expect(screen.getByText("ADD MOVIE")).toBeInTheDocument();
        });
    });
});
