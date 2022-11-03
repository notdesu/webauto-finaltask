class ProductsPage {
  // span[class="title"]
  get productsPageTitle() {
    return $('span[class="title"]');
  }

  get productList() {
    return $('div[class="inventory_list"]');
  }
}

export default new ProductsPage();
