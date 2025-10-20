
/// <reference types="cypress" />

describe('Test de API ', () => {


    it('Crear un Producto nuevo', () => {
        cy.fixture('request/postObject.json').then((object) => {

            cy.request('POST', 'https://api.restful-api.dev/objects', object)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.name).to.eq(object.name)

                    Cypress.env('productoId', response.body.id)
                    Cypress.env('productoName', response.body.name)
                })
                
        })
    })



    it('Consultar Producto por ID', function () {

        const productoId = Cypress.env('productoId')
        const productoName = Cypress.env('productoName')

        cy.request({
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${productoId}`,
        }).then((responseGet) => {
            expect(responseGet.status).to.eq(200)
            expect(responseGet.body.name).to.eq(productoName)
        })
    })

    it('Actualizar un producto', () => {
        cy.fixture('request/postObject.json').then((objetoNuevo) => {
            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${Cypress.env('productoId')}`,
                body: objetoNuevo,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq(objetoNuevo.name)
            })
        })
    })


    it('Eliminar un producto', () => {

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${Cypress.env('productoId')}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)

        })
    })
})







