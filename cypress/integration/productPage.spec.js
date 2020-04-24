/// <reference types="cypress" />

describe("Populating featured catalogue details test ", function () {
  // it('Populating featured catalogue details failure test', function () {
  //     cy.server()           // enable response stubbing
  //     cy.route({
  //         method: 'GET',      // Route all GET requests
  //         url: '/api/product/puma-shoes',    // that have a URL that matches '/users/*'
  //         response: {
  //             message: "Fetching data failed",
  //         },       // and force the response to be: []
  //         status: 404,
  //     })

  // })
  it("Populating featured catalogue details success test", function () {
    cy.server(); // enable response stubbing
    cy.route({
      method: "GET", // Route all GET requests
      url: "/api/product/puma-shoes", // that have a URL that matches '/users/*'
      response: {
        id: "987456123",
        handler: "Puma-shoes",
        title: "Puma Shoes",
        description: "Amazing sports shoes",
        tags: ["casual", "sports"],
      }, // and force the response to be: []
      status: 200,
    });
    cy.visit("http://localhost:3000/product/puma-shoes");
    // cy.get("#featured-item-title")

    cy.wait(300);
  });
});
