import { Then, When } from '@wdio/cucumber-framework';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on SwagLabs products page$/, async () => {
  await ProductsPage.productsPageTitle.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Products page was not found',
  });
});

When(/^User adds - "([^"]*)" to the shopping cart$/, async (productName) => {

});
