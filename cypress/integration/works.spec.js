/// <reference types="cypress" />

context("Works", () => {
  beforeEach(() => {});

  it("Should display 'Works' section if there is at least 1 PortfolioItem", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get("h2").should("include.text", "Works");
  });

  it("Should not display 'Works' section if there are 0 PortfolioItems", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/portfolioItems",
      status: 200,
      response: JSON.stringify([]),
      delay: 0,
    });
    cy.visit("/");
    cy.wait(2000);
    cy.get("h2").should("not.include.text", "Works");
  });
});
