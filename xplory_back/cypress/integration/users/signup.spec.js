describe("user signup", () => {
    it("creates a new user", () => {
        //Navigate to the sign up pager
        cy.visit("sign-up")

        //fill out the fields
        cy.get("[data-cy=signup-username]").type("John Smith")
        //click the sign up buttons

        //expect a redirect back to the home page
    })
})