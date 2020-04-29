/// <reference types="cypress" />

describe("Populating featured catalogue details test ", function () {
  it("Populating featured catalogue details failure test", function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/product/puma-shoes",
      response: {
        message: "Fetching data failed",
      },
      status: 404,
    }).as("fetchCatalogueItemService");

    cy.visit("http://localhost:3000/product/puma-shoes");
    cy.wait(["@fetchCatalogueItemService"]);
  });
  it("Populating featured catalogue details success test", function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/product/puma-shoes",
      response: {
        id: "987456123",
        handler: "Puma-shoes",
        title: "Puma Shoes",
        description: "Amazing sports shoes",
        tags: ["casual", "sports"],
      },
      status: 200,
    }).as("fetchCatalogueItemService");
    cy.visit("http://localhost:3000/product/puma-shoes");
    cy.get("#catalogue-fetaured-item-title");
    cy.wait(["@fetchCatalogueItemService"]);
    cy.get("h5").should("contain.text", "Puma Shoes");
  });
});
