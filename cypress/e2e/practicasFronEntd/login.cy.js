
const { faker } = require('@faker-js/faker');


describe("Login a Pagina Web", () => {

    before(() => {
        cy.visit(Cypress.env('baseUrl'))

        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const street = faker.location.streetAddress()
        const city = faker.location.city()
        const state = faker.location.state()
        const zipCode = faker.location.zipCode()
        const phoneNumber = faker.phone.number()
        const ssn = faker.helpers.replaceSymbols('###-##-####')

        Cypress.env('userFirstName', firstName)
        Cypress.env('userLastName', lastName)
        Cypress.env('userStreet', street)
        Cypress.env('userCity', city)
        Cypress.env('userstate', state)
        Cypress.env('userZipCode', zipCode)
        Cypress.env('userPhoneNumber', phoneNumber)
        Cypress.env('userSsn', ssn)


    })

    afterEach(() => {

        console.log("El test pasó bien")
    })



    it("Register", () => {
        const username = faker.internet.username()
        const password = faker.internet.password()

        Cypress.env('userUsername', username)
        Cypress.env('userpassword', password)


        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('[name="customer.firstName"]').type(Cypress.env('userFirstName'))
        cy.get('[name="customer.lastName"]').type(Cypress.env('userLastName'))
        cy.get('[name="customer.address.street"]').type(Cypress.env('userStreet'))
        cy.get('[name="customer.address.city"]').type(Cypress.env('userCity'))
        cy.get('[name="customer.address.state"]').type(Cypress.env('userstate'))
        cy.get('[name="customer.address.zipCode"]').type(Cypress.env('userZipCode'))
        cy.get('[name="customer.phoneNumber"]').type(Cypress.env('userPhoneNumber'))
        cy.get('[name="customer.ssn"]').type(Cypress.env('userSsn'))
        cy.get('[name="customer.username"]').type(Cypress.env('userUsername'))
        cy.get('[name="customer.password"]').type(Cypress.env('userpassword'))
        cy.get('[name="repeatedPassword"]').type(Cypress.env('userpassword'))
        cy.get('[colspan="2"] > .button').click()

    })


    it("Login", () => {

        cy.visit(Cypress.env('baseUrl'))
        cy.get('[name="username"]').type(Cypress.env('userUsername'))
        cy.get('[name="password"]').type(Cypress.env('userpassword'))
        cy.get(':nth-child(5) > .button').click()


    })




})