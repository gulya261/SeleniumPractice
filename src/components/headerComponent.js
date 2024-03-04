const BasePage = require("../pages/base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class HeaderComponent extends BasePage {
    constructor(){
        super()
        this.burgerMenuBtn = by.id('react-burger-menu-btn')
        this.logo = by.className('app_logo')
        this.cart = by.className('shopping_cart_link')
        this.cartBadge = by.className("shopping_cart_badge");
    }
  

    //создать метод openBurgerMenu
    async openBurgerMenu() {
        await super.clickOnButton(this.burgerMenuBtn);
      }
    //создать метод opencartpage (клик на корзину)
    async openCartPage() {
        await super.clickOnButton(this.cartBadge);
      }
}

module.exports = HeaderComponent;
