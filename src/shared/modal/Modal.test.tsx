import React from "react";

import { renderWithProviders } from "../../utils/test-utils";
import { Modal } from "./Modal";
import { screen } from "@testing-library/react";

describe("modal", () => {
    test("renders correctly", () => {
        renderWithProviders(
            // @ts-ignore
            <Modal title="add movie">
                <p>This is Modal</p>
            </Modal>
        );

        expect(screen).toMatchSnapshot();
    });

    test("renders title and content correctly", () => {
        renderWithProviders(
            // @ts-ignore
            <Modal title="add movie">
                <p>This is Modal</p>
            </Modal>
        );

        expect(
            screen.getByRole("heading", {
                name: /add movie/i,
            })
        ).toBeVisible();
        expect(screen.getByText("This is Modal")).toBeVisible();
    });

    test("renders buttons correctly", () => {
        renderWithProviders(
            // @ts-ignore
            <Modal title="add movie">
                <p>This is Modal</p>
            </Modal>
        );

        expect(
            screen.getByRole("button", {
                name: /submit/i,
            })
        ).toBeVisible();
        expect(
            screen.getByRole("button", {
                name: /reset/i,
            })
        ).toBeVisible();
    });
});
