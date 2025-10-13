/// <reference types="cypress" />

import { BasePage } from "./basePage"
import type { IUser } from "../../models/IUser"


export class LoginUser extends BasePage {

    private inputUsername = '[name="username"]'
    private inputPassword = '[name="password"]'
    private btnSubmitLogin = ':nth-child(5) > .button'

    /*
    public fieldUsernameLogin(usernameLogin: string) {

        cy.get(this.inputUsername).type(usernameLogin)
    }

    public fieldPasswordLogin(passwordLogin: string) {

        cy.get(this.inputPassword).type(passwordLogin)
    }

    public clickOnLog_in() {

        cy.get(this.btnSubmitLogin).click()
    } */

    public visitLogin(){
        this.visit(Cypress.env('baseUrl'))
    }


    public userLogin(user:IUser) {
        // this.fieldUsernameLogin("Serch")
        this.type(this.inputUsername, user.username)

        //this.fieldPasswordLogin("Sergio1234")
        this.type(this.inputPassword, user.password)

       // this.clickOnLog_in()
        this.click(this.btnSubmitLogin)
    }


}