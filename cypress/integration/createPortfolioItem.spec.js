/// <reference types="cypress" />

context("Create Portfolio Item", () => {
  beforeEach(() => {
    cy.visit("/admin");
    cy.get("h1").should("have.text", "Login");
    cy.get("#email").type("test@email.com");
    cy.get("#password").type("Red123456!");

    cy.get("#log-in").click();

    cy.get("h1").should("have.text", "Admin Dashboard");

    cy.get("#action-select").select("Create PortfolioItem");
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

  it("Should have disabled form state", () => {
    cy.get("h2").should("include.text", "Create a New Portfolio Item");

    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.get("#title").type("Test Title");
    cy.get("#tagline").type("Test Tagline");
    cy.get("#iconBackground").type("Test Icon Background");
    cy.get("#iconClass").type("Test Icon Class");
    getIframeBody()
      .find("p:first-of-type")
      .then((thing) => {
        cy.wrap(thing).type("Test Content");
      });

    cy.get('[data-cy="submit-button"]').should("be.disabled");

    cy.fixture("example.jpg", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get("input[type=file]").attachFile({
          fileContent,
          filePath: "example.jpg",
          encoding: "utf-8",
        });
      });

    cy.get('[data-cy="submit-button"]').should("be.enabled");
  });
});
