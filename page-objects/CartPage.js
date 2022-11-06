class CartPage {
  get cartList() {
    return $('div[class="cart_list"]');
  }

  get checkoutButton() {
    return $('button[data-test="checkout"]');
  }

  async validatePresenceOfDesiredItemInCartList(productTitle, productPrice) {
    const cartList = await this.cartList.$$('div[class="cart_item"]');

    const actualProductTitle = await cartList[0].$('div[class="inventory_item_name"').getText();
    const actualProductPrice = await cartList[0].$('div[class="inventory_item_price"]').getText();

    await expect(actualProductTitle).toBe(productTitle);
    await expect(actualProductPrice).toBe(productPrice);
  }
}

export default new CartPage();
