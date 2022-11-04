import { Then, When } from '@wdio/cucumber-framework';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on SwagLabs products page$/, async () => {
  await ProductsPage.productsPageTitle.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Products page was not found',
  });
});

When(/^User adds - "([^"]*)" to the shopping cart$/, async (productTitle) => {
  await ProductsPage.addProductToCart(productTitle);
});

When(/^User opens shopping cart$/, async () => {
  await ProductsPage.cartButton.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Cart button was not found',
  });

  await ProductsPage.cartButton.click();
});
