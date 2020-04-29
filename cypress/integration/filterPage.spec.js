describe("Fetch result on filter page", function () {
  // it("populating data on filter page failure test", function () {
  //   cy.server();
  //   cy.route({
  //     method: "POST",
  //     url: "/api/filter",
  //     response: {
  //       message: "Fetching data failed",
  //     },
  //     status: 400,
  //   }).as("fetchFilterResultService");

  //   cy.visit("http://localhost:3000/filter");

  //   cy.get(".modal").click(1, 1);
  //   cy.wait(300);
  //   cy.wait(["@fetchFilterResultService"]);
  // });
  it("populating data on filter page success test", function () {
    cy.server();
    cy.route({
      method: "POST",
      url: "/api/filter",
      response: [
        {
          _id: "300",
          _handler: "nike-black-white-anthracite",
          title: "Nike Black White Anthracite",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "301",
          _handler: "adidas-shoes",
          title: "Adidas Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "302",
          _handler: "nike-shoes",
          title: "Nike Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "303",
          _handler: "new-balance-shoes",
          title: "New Balance Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "304",
          _handler: "adidas-shoes",
          title: "Adidas Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
      ],
      status: 200,
    }).as("fetchFilterResultService");
    cy.visit("http://localhost:3000/filter");
    cy.wait("@fetchFilterResultService");
    cy.get("h6").should("contain.text", "Nike Black White Anthracite");
    cy.route({
      method: "POST",
      url: "/api/filter",
      response: [
        {
          _id: "305",
          _handler: "nike-black-white-anthracite-2",
          title: "Nike Black White Anthracite",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "306",
          _handler: "adidas-shoes-2",
          title: "Adidas Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "307",
          _handler: "puma-shoes-4",
          title: "Puma Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "308",
          _handler: "converse-shoes",
          title: "Converse shoes-2-",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
        {
          _id: "309",
          _handler: "puma-shoes-3",
          title: "Puma Shoes",
          description: "Amazing sports shoes",
          tags: ["casual", "sports"],
        },
      ],
      status: 200,
    }).as("fetchFilterResultService2");
    cy.get(".catalogue-item").scrollTo("bottom");
    cy.wait(["@fetchFilterResultService2"]);
    cy.get("h6").should("contain.text", "Nike Black White Anthracite");
    cy.wait(1000);
    cy.get(".catalogue-item").scrollTo("top");
  });
});
