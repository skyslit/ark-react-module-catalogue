describe("Fetch result on filter page", function () {
  it("populating data on filter page failure test", function () {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/filter",
      response: {
        message: "Fetching data failed",
      },
      status: 400,
    }).as("fetchFilterResultService");

    cy.visit("http://localhost:3000/filter");

    cy.get(".modal").click(1, 1);
    cy.wait(300);
    cy.wait(["@fetchFilterResultService"]);
  });
  it("populating data on filter page success test", function () {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/filter",
      response: [
        {
          _id: "987456123",
          _handler: "puma-shoes",
          title: "Puma Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
      ],
      status: 200,
    }).as("fetchFilterResultService");
    cy.visit("http://localhost:3000/filter");
    cy.wait(["@fetchFilterResultService"]);
  });
});
