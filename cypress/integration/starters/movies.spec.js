/// <reference types="cypress" />

describe("My First Test", function () {
  it("Visits the Kitchen Sink", function () {
    cy.server(); // enable response stubbing
    cy.route({
      method: "GET", // Route all GET requests
      url: "/api/movies", // that have a URL that matches '/users/*'
      response: [
        {
          title: "Jurassic World",
          actor: "Chris Prat",
        },
        {
          title: "Thor: The Dark World",
          actor: "Chris Hemsworth",
        },
        {
          title: "Captain America",
          actor: "Chris Evans",
        },
      ], // and force the response to be: []
      status: 200,
    });

    cy.visit("http://localhost:3000");
  });
});
