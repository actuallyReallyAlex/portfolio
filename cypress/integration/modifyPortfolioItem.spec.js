/// <reference types="cypress" />

context("Modify Portfolio Item", () => {
  beforeEach(() => {
    cy.visit("/admin");
    cy.get("h1").should("have.text", "Login");
    cy.get("#email").type("test@email.com");
    cy.get("#password").type("Red123456!");

    cy.get("#log-in").click();

    cy.get("h1").should("have.text", "Admin Dashboard");

    cy.get("#action-select").select("Create PortfolioItem");

    cy.get("#title").type("New Test Item");
    cy.get("#tagline").type("Test tagline.");
    cy.get("#iconBackground").type("blue");
    cy.get("#iconClass").type("fab fa-github");
    getIframeBody()
      .find("p:first-of-type")
      .then((thing) => {
        cy.wrap(thing).type("Test Content");
      });

    cy.fixture("example.jpg", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get("input[type=file]").attachFile({
          fileContent,
          filePath: "example.jpg",
          encoding: "utf-8",
        });
      });

    cy.get('[data-cy="submit-button"]').click();

    cy.get('[data-cy="notification-title"]').should("have.text", "Success");
  });

  const getIframeDocument = () => {
    return (
      cy
        .get("iframe")
        // Cypress yields jQuery element, which has the real
        // DOM element under property "0".
        // From the real DOM iframe element we can get
        // the "document" element, it is stored in "contentDocument" property
        // Cypress "its" command can access deep properties using dot notation
        // https://on.cypress.io/its
        .its("0.contentDocument")
        .should("exist")
    );
  };

  const getIframeBody = () => {
    // get the document
    return (
      getIframeDocument()
        // automatically retries until body is loaded
        .its("body")
        .should("not.be.undefined")
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        .then(cy.wrap)
    );
  };

  it("Should allow for modification of a PortfolioItem", () => {
    cy.visit("/admin");
    cy.get("#action-select").select("Modify PortfolioItem");
    cy.get("#portfolio-item").select("New Test Item");

    cy.get("#tagline").clear();
    cy.get("#tagline").type("This is a new tagline!");

    cy.get('button[type="submit"]').click();
    cy.get('[data-cy="notification-title"]').should("have.text", "Success");

    // * Cleanup
    cy.visit("/admin");
    cy.get("#action-select").select("Delete PortfolioItem");
    cy.get("#portfolio-item").select("New Test Item");
    cy.get('button[type="submit"]').click();
    cy.get('[data-cy="notification-title"]').should("have.text", "Success");
  });
});
