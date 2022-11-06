import { Given, When } from '@wdio/cucumber-framework';
import LoginPage from '../page-objects/LoginPage';

Given(/^User has opened SwagLabs website$/, async () => {
  await LoginPage.open();
});

Given(/^User inputs username - "([^"]*)"$/, async (username) => {
  await LoginPage.usernameInputField.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Username input field was not found',
  });

  await LoginPage.usernameInputField.setValue(username);
});

Given(/^User inputs password - "([^"]*)"$/, async (password) => {
  await LoginPage.passwordInputField.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Password input field was not found',
  });

  await LoginPage.passwordInputField.setValue(password);
});

When(/^User press the login button$/, async () => {
  await LoginPage.loginButton.waitForClickable({
    timeout: 5000,
    timeoutMsg: 'Login button was not found',
  });

  await LoginPage.loginButton.click();
});
