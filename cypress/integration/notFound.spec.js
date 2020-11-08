/// <reference types="cypress" />

context("Not Found Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#hero").should("contain.text", "Hello, World.");
    cy.get("#hero").should("contain.text", "I'm Alex Lee");
    cy.get("#hero").should("contain.text", "Senior Software Engineer");
  });

  it("Should return to Home page upon click of button", () => {
    cy.visit("/unknownPath");

    cy.get('[data-cy="return-link"]').click();

    cy.url().then((urlValue) => {
      expect(urlValue).to.equal("http://localhost:3000/");
    });

    cy.get("#hero").should("contain.text", "Hello, World.");
    cy.get("#hero").should("contain.text", "I'm Alex Lee");
    cy.get("#hero").should("contain.text", "Senior Software Engineer");
  });

  it("Should display Not Found Page on unknown root path", () => {
    cy.visit("/unknownPath");
    cy.get("#not-found").should("contain.text", "Page not found!");
    cy.get("#not-found").should(
      "contain.text",
      "Sorry, but the page you were looking for could not be found."
    );
    cy.get("#not-found").should("contain.text", "Return to the front page");
  });

  it("Should display Not Found Page on unknown portfolio path", () => {
    cy.visit("/portfolio/unknownPath");
    cy.get("#not-found").should("contain.text", "Page not found!");
    cy.get("#not-found").should(
      "contain.text",
      "Sorry, but the page you were looking for could not be found."
    );
    cy.get("#not-found").should("contain.text", "Return to the front page");
  });
});
