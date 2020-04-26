/// <reference types="cypress" />

describe("Fetch data on home page", function () {
  it("populating data on home page failure test", function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/home",
      response: {
        message: "Fetching data failed",
      },
      status: 400,
    }).as("fetchHomePageService");

    cy.visit("http://localhost:3000/home-page");

    cy.get(".modal").click(1, 1);
    cy.wait(300);
    cy.wait(["@fetchHomePageService"]);
  });
  it("populating data on home page success test", function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/home",
      response: [
        {
          _id: "987456123",
          _handler: "puma-shoes",
          title: "Puma Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
      ], // and force the response to be: []
    }).as("fetchHomePageService");
    cy.visit("http://localhost:3000/home-page");
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
    cy.get("#handler-0").click(1, 1);
    cy.get("#catalogue-fetaured-item-title");
    cy.wait(["@fetchHomePageService"]);
  });
});
