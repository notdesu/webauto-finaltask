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

  get errorMessageContainer() {
    return $('h3[data-test="error"]');
  }

  async open() {
    await super.open('http://www.saucedemo.com/');
  }

  async checkErrorMessage(errorMessage) {
    await expect(this.errorMessageContainer).toHaveText(errorMessage);
  }
}

export default new LoginPage();
