import { RegisterPage } from "../../pages/registerPage"
import { LoginUser } from "../../pages/loginPage"
import type { IUser } from "../../../models/IUser"
import type { IRegister } from "../../../models/IRegister"


describe("Login a Pagina Web", () => {

    const registerUser = new RegisterPage()
    const loginUser = new LoginUser()

    
    const resgiterOk: IRegister = {
        name: 'Sergio', lastname: 'Errigo', adress: 'Direccion', city: 'Ciudad', state: 'Estado',
        zipCode: 'Postal', phoneNumber: '1234567890', ssn: '987654321', username: 'Usuario', password: 'Password1'
    }
    const userOk: IUser = { username: 'Usuario', password: 'Password1' }


    it("Register", () => {

        loginUser.visitLogin()

        registerUser.registerUser(resgiterOk)
    })




    it("Login OK", () => {

        loginUser.visitLogin()
        loginUser.userLogin(userOk)

    })
})