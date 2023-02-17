

///<reference types="cypress">

describe('Skjema Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080/reviews');
  })

  it("Should get error when trying to submit empty fields", () => {
    cy.get('input[name=name]').type("Daniel");
    cy.get('button[type=submit]').click();

    cy.contains('Error: No input field can be empty');
  })

  it("Should get error when trying to submit without proper email", () => {
    cy.get('input[name=name]').type("Daniel");
    cy.get('input[name=email]').type("lol");
    cy.get('textarea[name=message]').type("message teset");

    cy.get('button[type=submit]').click();

    cy.contains('Error: Email must contain @');
  })

  it("Should get error when trying to submit without proper email", () => {
    cy.get('input[name=name]').type("Daniel");
    cy.get('input[name=email]').type("lol@gmail.com");
    cy.get('textarea[name=message]').type("message teset");

    cy.get('button[type=submit]').click();

    cy.contains('Success;');
  })
})