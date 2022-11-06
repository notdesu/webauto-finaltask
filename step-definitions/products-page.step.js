import { Then, When } from '@wdio/cucumber-framework';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on SwagLabs products page$/, async () => {
  await ProductsPage.productsPageTitle.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Products page was not found',
  });
});

// possible to add any item by changing the value in feature file
// possible to check for actual adding items to cart by looking at badge of cart icon
When(/^User adds - "([^"]*)" to the shopping cart$/, async (productTitle) => {
  await ProductsPage.addProductToCart(productTitle);

  await ProductsPage.shoppingCartBadge.waitForDisplayed({
    timeout: 5000,
    timeoutMsg: 'Counter of items in cart was not found, possibly no items were added to cart',
  });
});

When(/^User opens shopping cart$/, async () => {
  await ProductsPage.cartButton.waitForClickable({
    timeout: 5000,
    timeoutMsg: 'Cart button was not found',
  });

  await ProductsPage.cartButton.click();
});
