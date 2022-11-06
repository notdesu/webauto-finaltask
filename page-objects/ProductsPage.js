class ProductsPage {
  constructor(itemGet, desiredItemName) {
    this.itemGet = itemGet;
    this.desiredItemName = desiredItemName;
  }

  get productsPageTitle() {
    return $('span[class="title"]');
  }

  get productList() {
    return $$('div[class="inventory_item_name"]');
  }

  get addItemToCart() {
    return $(this.itemGet);
  }

  /**
   * @param {string} desiredItemName
   */
  set changeDesiredItemName(desiredItemName) {
    this.desiredItemName = desiredItemName;
    this.itemGet = `//div[@class="inventory_item_name" and contains(text(), "${desiredItemName}")]//following::button[1]`;
  }

  get desiredItem() {
    return this.desiredItemName;
  }

  get cartButton() {
    return $('a[class="shopping_cart_link"]');
  }

  get shoppingCartBadge() {
    return $('span[class="shopping_cart_badge"]');
  }

  async addProductToCart(productTitle) {
    const productListLength = await this.productList.length;
    for (let i = 0; i < productListLength; i++) {
      await this.productList[i].waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Item in product list was not found',
      });

      const productListItemTitle = await this.productList[i].getText();
      if (productListItemTitle === productTitle) {
        this.changeDesiredItemName = productTitle;

        await this.addItemToCart.waitForClickable({
          timeout: 5000,
          timeoutMsg: 'Add to cart button was not found',
        });

        await this.addItemToCart.click();
        return;
      }
    }

    throw new Error('Desired item was not found');
  }
}

export default new ProductsPage();
