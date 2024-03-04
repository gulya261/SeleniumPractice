const BasePage = require("../pages/base.page");
const webdriver = require("selenium-webdriver");
const by = webdriver.By;

class ItemComponent extends BasePage {
    constructor(){
        super()
        this.itemName = by.className('inventory_details_name')
        this.itemPrice = by.className('inventory_details_price')
        this.addToCartBtn = by.className('btn_inventory')
        this.searchFirstItem = by.css('.inventory_item_name:nth-child(1)')
        this.searchFirstItemImage = by.css(`[alt = 'Sauce Labs Backpack']`)
        this.productImage = by.css(`[alt = 'Sauce Labs Fleece Jacket']`)
        
    }

    async addItemToCart() {
        await super.clickOnButton(this.addToCartBtn);
      }

      async removeItemFromCart() {
        await super.clickOnButton(this.addToCartBtn);
      }
}

module.exports = ItemComponent;