import * as React from "react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/test-utils";
import { Search } from "./Search";

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
