import Page from './Page';

class LoginPage extends Page {
  get usernameInputField() {
    return $('input[id="user-name"]');
  }

  get passwordInputField() {
    return $('input[id="password"]');
  }

  get loginButton() {
    return $('input[id="login-button"]');
  }

  async open() {
    await super.open('http://www.saucedemo.com/');
  }
}

export default new LoginPage();
