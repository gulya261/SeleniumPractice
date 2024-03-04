const BasePage = require("./base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class CartPage extends BasePage {
  constructor() {
    super();
    this.addToCardButton = by.id(`add-to-cart-sauce-labs-fleece-jacket`);
    this.badge = by.className(`shopping_cart_link`);
   
  }

  async addItemToCart() {
    await super.clickOnButton(this.addToCardButton);
 }

  

 
}



module.exports = CartPage;
