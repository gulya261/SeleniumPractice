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

  async getElementAttribute(locator, value) {
    const element = await this.findElement(locator);
    const elementValue = await element.getAttribute(value);
    return elementValue;
  }

  async getElementText(locator) {
    const element = await this.findElement(locator);
    return await element.getText();
  }

  async isElementDisplayed(locator) {
    (await this.findElement(locator)).isDisplayed();
  }

  async isElementExist(locator) {
    try {
      await this.findElement(locator);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = BasePage;
