import * as React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/test-utils";
import { Header } from "./Header";
import userEvent from "@testing-library/user-event";

describe("renders header", () => {
    test("opens add movie modal on click 'Add movie' button", () => {
        const user = userEvent.setup();

        renderWithProviders(<Header />);

        expect(screen.queryByAltText(/netflix roulette logo/i)).toBeVisible();

        user.click(screen.getByRole("button", { name: /Add movie/i }));
    });
});
