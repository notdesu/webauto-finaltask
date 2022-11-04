import { Then, When } from '@wdio/cucumber-framework';
import CartPage from '../page-objects/CartPage';

Then(/^User sees product - "([^"]*)" with price - "([^"]*)"$/, async (productName, productPrice) => {
  await CartPage.validatePresenceOfJacketInCartList(productName, productPrice);
});

When(/^User press checkout button$/, async () => {
  await CartPage.checkoutButton.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Cart button was not found',
  });

  await CartPage.checkoutButton.click();
});
