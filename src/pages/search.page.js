const BasePage = require("./base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class SearchPage extends BasePage {
  constructor() {
    super();
    this.addToCardButton = by.id(`add-to-cart-sauce-labs-backpack`);
    this.badge = by.className(`shopping_cart_badge`);
    this.removeButton = by.id(`remove-sauce-labs-backpack`);
    this.emtyBadge = by.className(`shopping_cart_link:empty`);
    this.item = by.css(".inventory_item_name:nth-child(1)");
  }
  async addItemToCart() {
     await super.clickOnButton(this.addToCardButton);
  }

  async removeItemFromCart() {
    await super.clickOnButton(this.removeButton);
  }
}

module.exports = SearchPage;
