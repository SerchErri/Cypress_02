/// <reference types="cypress" />

describe('Intercept de API', () => {

    const petIds = [1000001001, 1000001002, 1000001003]

    before(() => {
        petIds.forEach((id) => {
            cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/${id}`,
                failOnStatusCode: false
            }).then((response) => {
                if (response.status === 200) {
                    cy.request({
                        method: 'DELETE',
                        url: `https://petstore.swagger.io/v2/pet/${id}`,
                        failOnStatusCode: false 
                    })
                }
            })
        })
    })


    it('Crea un perro desde JSON externo', () => {
        cy.fixture('request/pets.json').then((pets) => {
            const perro = pets.perro
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', perro)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.name).to.eq(perro.name)
                })
        })
    })



    it('Crea un gato desde JSON externo', () => {
        cy.fixture('request/pets.json').then((pets) => {
            const gato = pets.gato
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', gato)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.name).to.eq(gato.name)
                })
        })
    })

    it('Crea un loro desde JSON externo', () => {
        cy.fixture('request/pets.json').then((pets) => {
            const loro = pets.loro
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', loro)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.name).to.eq(loro.name)
                })
        })
    })


    it('Obtener mascota por ID', () => {
        cy.fixture('response/responsePets.json').then((jsonResponse) => {
            cy.request('GET', 'https://petstore.swagger.io/v2/pet/1000001001')
                .then((responsePerro) => {
                    expect(responsePerro.status).to.eq(200)
                    expect(responsePerro.body.name).to.eq(jsonResponse.perro.name)
                })
        })
    })





})

