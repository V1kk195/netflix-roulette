import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../utils/test-utils";
import { Sort } from "./Sort";

describe("sort", () => {
    test("works correctly", async () => {
        const user = userEvent.setup();

        renderWithProviders(<Sort />);

        const selectElem = screen.getByRole("combobox");

        expect(selectElem).toHaveValue("release_date");

        await user.selectOptions(selectElem, "title");
        expect(await selectElem).toHaveValue("title");
    });
});
