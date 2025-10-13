/// <reference types="cypress" />

import type { IRegister } from "../../models/IRegister"
import { BasePage } from "./basePage"

export class RegisterPage extends BasePage {

    private btnRegister = '#loginPanel > :nth-child(3) > a'
    private inputName = '[name="customer.firstName"]'
    private inputLastname = '[name="customer.lastName"]'
    private inputAdress = '[name="customer.address.street"]'
    private inputCity = '[name="customer.address.city"]'
    private inputState = '[name="customer.address.state"]'
    private inputZipCode = '[name="customer.address.zipCode"]'
    private inputPhoneNumber = '[name="customer.phoneNumber"]'
    private inputSsn = '[name="customer.ssn"]'
    private inputUsername = '[name="customer.username"]'
    private inputPassword = '[name="customer.password"]'
    private inputRepeatPassword = '[name="repeatedPassword"]'
    private btnSubmit = '[colspan="2"] > .button'

    //Comandos viejos
    /*
        public clickOnRegister() {
            cy.get(this.btnRegister).click()
        }
    
        public fieldFirstname(name: string) {
    
            cy.get(this.inputName).type(name)
        }
    
        public fieldLastname(lastName: string) {
    
            cy.get(this.inputLastname).type(lastName)
        }
    
    
        public fieldAddress(addres: string) {
    
            cy.get(this.inputAdress).type(addres)
        }
    
    
        public fieldCity(city: string) {
    
            cy.get(this.inputCity).type(city)
        }
    
        public fieldState(state: string) {
    
            cy.get(this.inputState).type(state)
        }
    
    
        public fieldZipCode(zipCode: string) {
    
            cy.get(this.inputZipCode).type("Código Postal")
        }
    
        public fieldPhoneNumber(phoneNumber: string) {
    
            cy.get(this.inputPhoneNumber).type(phoneNumber)
        }
    
        public fieldSsn(Ssn: string) {
    
            cy.get(this.inputSsn).type(Ssn)
        }
    
        public fieldUsername(username: string) {
    
            cy.get(this.inputUsername).type(username)
        }
    
        public fieldPassword(password: string) {
    
            cy.get(this.inputPassword).type(password)
        }
    
        public fieldRepeatPassword(repeatPassword: string) {
    
            cy.get(this.inputRepeatPassword).type(repeatPassword)
        }
    
        public clickOnSubmit() {
    
            cy.get(this.btnSubmit).click()
        }
    */

    public registerUser(register: IRegister) {
        //this.clickOnRegister()
        this.click(this.btnRegister)

        //this.fieldFirstname("Sergio")
        this.type(this.inputName, register.name)

        //this.fieldLastname("Errigo")
        this.type(this.inputLastname, register.lastname)

        //this.fieldAddress("Direccion")
        this.type(this.inputAdress, register.adress)

        //this.fieldCity("Ciudad")
        this.type(this.inputCity, register.city)

        //this.fieldState("Estado")
        this.type(this.inputState, register.state)

        //this.fieldZipCode("CodigoPostal")
        this.type(this.inputZipCode, register.zipCode)

        //this.fieldPhoneNumber("1234567890")
        this.type(this.inputPhoneNumber, register.phoneNumber)

        //this.fieldSsn("98745632")
        this.type(this.inputSsn, register.ssn)

        //this.fieldUsername("Serch")
        this.type(this.inputUsername, register.username)

        //this.fieldPassword("Sergio1234")
        this.type(this.inputPassword, register.password)

        //this.fieldRepeatPassword("Sergio1234")
        this.type(this.inputPassword, register.password)

        //this.clickOnSubmit()
        this.click(this.btnSubmit)

    }


}
