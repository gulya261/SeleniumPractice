const { By, Builder } = require("selenium-webdriver");
const expect = require("chai").expect;
//подобно 2й строчке,используется в ES6 (ES-модуль)
// import expect from 'chai'
const BasePage = require("../pages/base.page.js");
const LoginPage = require("../pages/login.page.js");
const SearchPage = require("../pages/search.page.js");
const ProductPage = require("../pages/product.page.js");
let basePage = new BasePage();
let loginPage = new LoginPage();
let searchPage = new SearchPage();
let productPage = new ProductPage();

describe("First script", function () {
  //авторизация
  it("Avtorization", async function () {
    await basePage.openPage("https://www.saucedemo.com/");

    const currentURL = await basePage.getPageUrl();
    // console.log(currentURL.toString());

    await loginPage.loginUser("standard_user", "secret_sauce");
    const newURL = await basePage.getPageUrl();

    expect(newURL).equal("https://www.saucedemo.com/inventory.html");

    // await new Promise(resolve => setTimeout(resolve, 5000));
  });

  //   //AddtoCard

  it("AddtoCard", async function () {
    await searchPage.addItemToCart();
   
    const checkBadgeValue = await basePage.getElementText(searchPage.badge); 
  
    expect(checkBadgeValue).to.equal("1");
  });

  //   //Remove

  it("Remove from cart", async function () {
    await searchPage.removeItemFromCart();

    const isBadgeExist = await basePage.isElementExist(searchPage.badge);
    expect(isBadgeExist).to.equal(false);
  });

  //

  it("open product page", async function () {
    await searchPage.clickOnButton(searchPage.item);
    const newURL = await basePage.getPageUrl();
   

    expect(newURL).include("https://www.saucedemo.com/inventory-item");
  });

  it("Add to Cart in product", async function () {
    await productPage.addItemToCart();

    const checkValue = await basePage.getElementText(productPage.cartBadge);
    expect(checkValue).to.equal("1");
  });

  after(async () => await basePage.quitPage());
});
