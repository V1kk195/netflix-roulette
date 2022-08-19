const searchQuery = "titanic";

describe("renders movies list correctly", () => {
    it("finds movies and shows movie details on click", () => {
        cy.visit("/");

        cy.url().should("include", "/search");

        cy.findByRole("textbox").type(searchQuery);
        cy.findByRole("button", {
            name: /search/i,
        }).click();

        cy.url().should("include", `/search/${searchQuery}`);
        cy.findByRole("textbox").should("have.value", searchQuery);
        cy.findByText(/1 movies found/i).should("be.visible");
        cy.findByRole("heading", {
            name: /titanic/i,
        }).should("be.visible");

        cy.findByRole("img", {
            name: /titanic poster/i,
        }).click();

        cy.url().should("include", `/search/${searchQuery}?movie=${597}`);

        cy.findByRole("banner")
            .within(() =>
                cy.findByRole("heading", {
                    name: /titanic/i,
                })
            )
            .should("be.visible");

        cy.findByRole("banner")
            .within(() =>
                cy.findByRole("img", {
                    name: /titanic poster/i,
                })
            )
            .should("be.visible");
    });
});
