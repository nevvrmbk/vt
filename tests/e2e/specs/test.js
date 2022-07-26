// https://docs.cypress.io/api/table-of-contents
describe("Home View Test", () => {
  it("Visit the apps root url", () => {
    cy.visit("/");
    // cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});

describe("About View Test", () => {
  it("Visit the apps root url", () => {
    cy.visit("/about");
    // cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});

describe("Contact View Test", () => {
  it("Visit the apps root url", () => {
    cy.visit("/contact");
    // cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});
