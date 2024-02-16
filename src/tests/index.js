const { By, Builder } = require("selenium-webdriver");
const expect = require("chai").expect;
//подобно 2й строчке,используется в ES6 (ES-модуль)
// import expect from 'chai'
const BasePage = require("../pages/base.page.js");
const LoginPage = require("../pages/login.page.js");
const SearchPage = require("../pages/search.page.js");
let basePage = new BasePage();
let loginPage = new LoginPage();
let searchPage = new SearchPage();

//let driver = await new Builder().forBrowser('chrome').build();;
describe("First script", function () {
  //авторизация
  it("Avtorization", async function () {
    await basePage.openPage("https://www.saucedemo.com/");

    const currentURL = await basePage.getPageUrl();
    console.log(currentURL.toString());

    await loginPage.loginUser("standard_user", "secret_sauce");
    const newURL = await basePage.getPageUrl();

    expect(newURL).equal("https://www.saucedemo.com/inventory.html");

    // await new Promise(resolve => setTimeout(resolve, 5000));
  });

  //   //AddtoCard

  it("AddtoCard", async function () {
    await searchPage.addItemToCart();
   // const checkBadgeElement = await basePage.findElement(searchPage.badge);
    const checkBadgeValue =
      await basePage.getElementAttribute(searchPage.badge); // (searchPage.badge)
    console.log(checkBadgeElement);
    expect(checkBadgeValue).to.equal("1");
  });

  //   //Remove

  it("Remove from cart", async function () {
    await searchPage.removeItemFromCart();

    const isBadgeDisplayed = await basePage.isElementDisplayed(
      searchPage.badge,
    );
    expect(isBadgeDisplayed).to.equal(false);
  });

  after(async () => await basePage.quitPage());
});
