const { By, Builder } = require("selenium-webdriver");
const expect = require("chai").expect;
//подобно 2й строчке,используется в ES6 (ES-модуль)
// import expect from 'chai'
const BasePage = require("../pages/base.page.js");
const LoginPage = require("../pages/login.page.js");
const SearchPage = require("../pages/search.page.js");
const ProductPage = require("../pages/product.page.js");
const ItemComponent = require("../components/itemComponent.js")
const HeaderComponent = require("../components/headerComponent.js")
const MenuComponent = require("../components/menuComponent.js");
const CartPage = require("../pages/cart.page.js");
const CheckoutPage = require("../pages/checkout.page.js");
let basePage = new BasePage();
let loginPage = new LoginPage();
let searchPage = new SearchPage();
let productPage = new ProductPage();
let itemComponent = new ItemComponent();
let headerComponent = new HeaderComponent();
let menuComponent = new MenuComponent();
let cartPage = new CartPage();
let checkoutPage = new CheckoutPage();


describe("First script", function () {
  //авторизация
  it("Avtorization", async function () {
    await basePage.openPage("https://www.saucedemo.com/");

    const currentURL = await basePage.getPageUrl();
    // console.log(currentURL.toString());

    await loginPage.loginUser("problem_user", "secret_sauce");
    const newURL = await basePage.getPageUrl();

    expect(newURL).equal("https://www.saucedemo.com/inventory.html");

    // await new Promise(resolve => setTimeout(resolve, 5000));
  });

 //check imagines

it("check imagines", async function(){

   const searchImageValue = await basePage.getElementAttribute(itemComponent.searchFirstItemImage, 'src')
   await basePage.clickOnButton(itemComponent.searchFirstItem)
   const newURL = await basePage.getPageUrl();
   expect(newURL).include("https://www.saucedemo.com/inventory-item")
   const productImageValue = await basePage.getElementAttribute(itemComponent.productImage, 'src')
   expect(searchImageValue).not.equal(productImageValue)
   //await new Promise(resolve => setTimeout(resolve, 5000));
})

it("add to cart", async function(){

        await cartPage.addItemToCart();
       
        const checkBadgeValue = await basePage.getElementText(cartPage.badge); 
      
        expect(checkBadgeValue).not.equal("1");
    
    //await new Promise(resolve => setTimeout(resolve, 5000));
 });

 it("check checkout", async function(){

    await basePage.clickOnButton(cartPage.badge);

    await basePage.clickOnButton(checkoutPage.checkoutBtn);

    await checkoutPage.checkOut("1","7","5")

    const lastNameValue = await basePage.getElementAttribute(checkoutPage.lastNameInput, '')

    expect(lastNameValue).equal(null)
   
   
});




  

  after(async () => await basePage.quitPage());
});
