class ProductsPage {
  // span[class="title"]
  get productsPageTitle() {
    return $('span[class="title"]');
  }

  get productList() {
    return $$('div[class="inventory_item_name"]');
  }

  get addToCartJacket() {
    return $('button[id="add-to-cart-sauce-labs-fleece-jacket"]');
  }

  get cartButton() {
    return $('a[class="shopping_cart_link"]');
  }

  async addProductToCart(productTitle) {
    // const val = await this.productList.length;
    // console.log(val);

    const productListLength = await this.productList.length;
    for (let i = 0; i < productListLength; i++) {
      const productListItemTitle = await this.productList[i].getText();
      if (productListItemTitle === productTitle) {
        await this.addToCartJacket.click();
        return;
      }
    }

    // throw new Error('Item was not found');

    // const productList = await this.productList.$$('div[class="inventory_item"]');
    // const actualProductTitle = await productList[3].$('div[class="inventory_item_name"')
    //   .getText();
    // await expect(actualProductTitle).toBe(productTitle);
  }
}

export default new ProductsPage();
