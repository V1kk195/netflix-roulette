import { screen } from "@testing-library/react";

test("renders search", () => {
    expect(screen.queryByText("FIND YOUR MOVIE"));
});
