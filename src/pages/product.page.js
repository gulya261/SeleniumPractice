const BasePage = require("./base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class ProductPage extends BasePage {
  constructor() {
    super();
    this.productName = by.className("inventory_details_name");
    this.addToCartBtn = by.id("add-to-cart-sauce-labs-backpack");
    this.cartBadge = by.className("shopping_cart_badge");
  }

  async addItemToCart() {
    await super.clickOnButton(this.addToCartBtn);
  }
}

module.exports = ProductPage;
