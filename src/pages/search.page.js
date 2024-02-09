const BasePage = require('./base.page')
const webdriver = require('selenium-webdriver')
const by = webdriver.By

class SearchPage extends BasePage {
    constructor(){
        super()
        this.addToCardButton = by.id(`add-to-cart-sauce-labs-backpack`)
        this.badge = by.className(`shopping_cart_badge`)
       this.removeButton = by.id(`remove-sauce-labs-backpack`)
       this.emtyBadge = by.className(`shopping_cart_link:empty`)
        
    }
  async addToCard(){

    const addCardButton = await super.findElement(this.addToCardButton)
    await super.clickOnButton(addCardButton)
  }

  // async checkBadge(){
  //   const badge = await super.findElement(this.badge)
  //   await super.clickOnButton(this.checkBadge)
  // }

  async removeFromBadge(){
    const removeButton = await super.findElement(this.removeButton)
  await super.clickOnButton(removeButton)
  }
}




module.exports = SearchPage;