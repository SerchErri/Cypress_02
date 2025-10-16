/// <reference types="cypress" />

describe('Mock API con intercept', () => {
  it('Mockeando una API con intercept', () => {
    cy.intercept('GET', '**/users').as('getUsers');

    cy.request('https://jsonplaceholder.typicode.com/users').then(
      (interception) => {
        expect(interception.status).to.equal(200);
        expect(interception.body).to.have.length(10);
      }
    );
  });
});

//el error era el wait de la peticion hay que poner el then en la respuesta directamente
