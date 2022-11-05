import { When, Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../page-objects/CheckoutPage';

When(/^User fills the checkout information$/, async () => {
  await CheckoutPage.firstNameInput.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'First name input was not found',
  });

  await CheckoutPage.lastNameInput.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Last name input was not found',
  });

  await CheckoutPage.postalCodeInput.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Postal code input was not found',
  });

  await CheckoutPage.firstNameInput.setValue('Oleksandr');
  await CheckoutPage.lastNameInput.setValue('Datskevych');
  await CheckoutPage.postalCodeInput.setValue('21101');
});

When(/^User press button to continue with the order$/, async () => {
  await CheckoutPage.continueButton.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Continue button was not found',
  });

  await CheckoutPage.continueButton.click();
});

When(/^User sees correct product details in checkout overview$/, async () => {
  await CheckoutPage.checkoutItemName.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Item from cart was not found',
  });

  await CheckoutPage.checkoutSummaryPayment.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Summary payment was not found',
  });

  await CheckoutPage.checkoutSummaryShipping.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Summary shipping was not found',
  });

  await CheckoutPage.validateCheckoutSummaryInfo(
    'Sauce Labs Fleece Jacket',
    'SauceCard #31337',
    'FREE PONY EXPRESS DELIVERY!',
  );
});

When(/^User press finish order button$/, async () => {
  await CheckoutPage.finishButton.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Finish button was not found',
  });

  await CheckoutPage.finishButton.click();
});

Then(/^User sees that order has been completed$/, async () => {
  await CheckoutPage.validateCompletionOfOrder();
});

Then(/^User goes back to the products page$/, async () => {
  await CheckoutPage.backHomeButton.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Back home button was not found',
  });

  await CheckoutPage.backHomeButton.click();
});
