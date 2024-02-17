const BasePage = require("./base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class LoginPage extends BasePage {
  constructor() {
    super();
    this.usernameInput = by.css(`[name='user-name']`);
    this.passwordInput = by.css(`[name='password']`);
    this.loginButton = by.css(`[name='login-button']`);
  }

  async loginUser(userValue, passwordValue) {
   // const userElement = await super.findElement(this.usernameInput);
    await super.sendKeysToElement(userValue, this.usernameInput);
   // const userPassword = await super.findElement(this.passwordInput);
    await super.sendKeysToElement(passwordValue, this.passwordInput);
    //const loginButton = await super.findElement(this.loginButton);
    await super.clickOnButton(this.loginButton);
  }
}

module.exports = LoginPage;
