/// <reference types="cypress" />

describe("Fetch data on home page", function () {
  // it("populating data on home page failure test", function () {
  //     cy.server();
  //     cy.route({
  //       method: "GET",
  //       url: "/api/home",
  //       response: {
  //         message: "Fetching data failed",
  //       },
  //       status: 400,
  //     })
  //     cy.visit("http://localhost:3000/home-page");

  //     cy.get(".modal").click(1, 1);
  //     cy.wait(300);
  //   });
  it("populating data on home page success test", function () {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/home",
      response: [
        {
          id: "987456123",
          handler: "puma-shoes",
          title: "Puma Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
      ], // and force the response to be: []
    });
    cy.visit("http://localhost:3000/home-page");
    cy.get("#handler-0").click(1, 1);
  });
});
