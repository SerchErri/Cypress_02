import { RegisterPage } from '../../pages/registerPage';
import { LoginUser } from '../../pages/loginPage';
import type { IUser } from '../../../models/IUser';
import type { IRegister } from '../../../models/IRegister';

describe('Login a Pagina Web', () => {
  const registerUser = new RegisterPage();
  const loginUser = new LoginUser();

  const resgisterOk: IRegister = {
    name: 'Sergio',
    lastname: 'Errigo',
    adress: 'Direccion',
    city: 'Ciudad',
    state: 'Estado',
    zipCode: 'Postal',
    phoneNumber: '1234567890',
    ssn: '987654321',
    username: 'Sergio1234',
    password: 'Password12',
    repeatpassword: 'Password12',
  };

  const userOk: IUser = { username: 'Sergio1234', password: 'Password12' };

  it('Register', () => {
    loginUser.visitLogin();

    registerUser.registerUser(resgisterOk);
  });

  it('Login OK', () => {
    loginUser.visitLogin();
    loginUser.userLogin(userOk);
  });
});
