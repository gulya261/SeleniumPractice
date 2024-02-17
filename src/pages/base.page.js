const { By, Builder, until } = require("selenium-webdriver");
const driver = require("../singleton.js");

class BasePage {
  constructor() {
    this.driver = driver;
  }
  async openPage(url) {
    await this.driver.get(url);
  }

  async quitPage() {
    await this.driver.quit();
  }
  closePage() {
    return driver.close();
  }

  async getPageUrl() {
    const url = await this.driver.getCurrentUrl();
    return url;
  }

  async findElement(locator) {
    return await this.driver.findElement(locator); 
  }

  async sendKeysToElement(value, locator) {
    const element = await this.findElement(locator);
    await element.sendKeys(value);
  }

  async clickOnButton(locator) {
    const element = await this.findElement(locator);
    await element.click();
  }

  async getElementAttribute(locator) {
    const element = await this.findElement(locator);
    await element.getAttribute();
  }

  async isElementDisplayed(locator) {
    (await this.findElement(locator)).isDisplayed();
  }
}
module.exports = BasePage;
