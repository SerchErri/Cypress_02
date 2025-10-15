/// <reference types="cypress" />

describe('Mock API con intercept', () => {
  it('Mockeando una API con intercept', () => {
    cy.intercept('GET', '**/user', { fixtures: 'usersClase.json' }).as(
      'getUsers'
    );

    cy.request('/user');

    cy.wait('@getUsers').then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
      expect(interception.response?.body).to.have.length(10);
    });
  });
});
