const BasePage = require("./base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class CheckoutPage extends BasePage {
  constructor() {
    super();
    this.checkoutBtn = by.id(`checkout`);
    this.firstNameInput = by.id (`first-name`);
    this.lastNameInput = by.id (`last-name`);
    this.ZipPostalCodeInput = by.id (`postal-code`);

    
  }
  async checkOut(firstNameInput, lastNameInput, ZipPostalCodeInput) {
    await super.sendKeysToElement(firstNameInput, this.firstNameInput);
    await super.sendKeysToElement(lastNameInput, this.lastNameInput);
    await super.sendKeysToElement(ZipPostalCodeInput, this.ZipPostalCodeInput);
  
  }
  

 
}



module.exports = CheckoutPage;
