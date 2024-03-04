const BasePage = require("../pages/base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class MenuComponent extends BasePage {
    constructor(){
        super()
        this.allItemsLink = by.id('inventory_sidebar_link')
        this.aboutLink = by.id('about_sidebar_link')
        this.logoutLink = by.id('logout_sidebar_link')
        this.resetAppState = by.id("reset_sidebar_link");
    }
  
    //open page (add method)

    //open 

    async openAllItemLink(){

    }
}

module.exports = MenuComponent;
