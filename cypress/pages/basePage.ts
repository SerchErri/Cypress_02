export class BasePage{

    visit(url:string): void{

        cy.visit(url)
    }

    click(selector: string): void{

        cy.get(selector).click()
    }


    type(selector: string, data: string): void{
        cy.get(selector).type(data)
    }
}