class CheckoutPage {
  get firstNameInput() {
    return $('input[data-test="firstName"]');
  }

  get lastNameInput() {
    return $('input[data-test="lastName"]');
  }

  get postalCodeInput() {
    return $('input[data-test="postalCode"]');
  }

  get continueButton() {
    return $('input[data-test="continue"]');
  }

  get checkoutItemName() {
    return $('div[class="inventory_item_name"]');
  }

  get checkoutSummaryPayment() {
    return $('//div[@class="summary_info_label" and contains(text(), "Payment Information")]//following-sibling::div[1]');
  }

  get checkoutSummaryShipping() {
    return $('//div[@class="summary_info_label" and contains(text(), "Shipping Information:")]//following-sibling::div[1]');
  }

  get finishButton() {
    return $('button[data-test="finish"]');
  }

  get checkoutCompletionText() {
    return $('div[class="complete-text"]');
  }

  get backHomeButton() {
    return $('button[data-test="back-to-products"]');
  }

  async validateCheckoutSummaryInfo(checkoutItem, summaryPayment, summaryShipping) {
    const actualCheckoutItemName = await this.checkoutItemName.getText();
    const actualCheckoutSummaryPayment = await this.checkoutSummaryPayment.getText();
    const actualCheckoutSummaryShipping = await this.checkoutSummaryShipping.getText();

    // Custom entered item name from feature file
    await expect(actualCheckoutItemName).toBe(checkoutItem);
    // SauceCard #31337
    await expect(actualCheckoutSummaryPayment).toBe(summaryPayment);
    // FREE PONY EXPRESS DELIVERY!
    await expect(actualCheckoutSummaryShipping).toBe(summaryShipping);
  }

  async validateCompletionOfOrder() {
    const actualCheckoutCompletionText = await this.checkoutCompletionText.getText();

    await expect(actualCheckoutCompletionText)
      .toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}

export default new CheckoutPage();
