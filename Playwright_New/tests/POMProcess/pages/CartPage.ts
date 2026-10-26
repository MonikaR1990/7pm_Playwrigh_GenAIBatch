import { Page, Locator } from '@playwright/test'

class CartPage
{
    //Propertise
    page: Page                  //Instance Variable    //Here only declaration
    cartProducts: Locator
    productName: Locator
    productPrice: Locator
    productQuantity: Locator
    productTotalPrice: Locator
    shoppingCart: Locator
    constructor(page: Page)     //Local Variable
    {
        this.page = page
        this.cartProducts = page.locator('.cart_product')
        //this.productName = page.locator('[href*="/product_details/"]')
        this.productName = page.locator('.cart_description h4 a')
        this.productPrice = page.locator('.cart_price p')
        this.productQuantity = page.locator('.cart_quantity button')
        this.productTotalPrice = page.locator('.cart_total_price')
        this.shoppingCart = page.getByText('shoppingCart')
    }

    //Methods
    async isCartPageLoaded(): Promise<boolean>
    {
        await this.page.waitForLoadState('load')
        return await this.shoppingCart.isVisible()   //it trurns boolean value
    }
    async getCartProductCount(): Promise<number>
    {
        return this.cartProducts.count()   //it returns number
    }
    async getProductName(index: number): Promise<string | null>
    {
        return await this.productName.nth(index).textContent()     //it returns string   
    }
    async getAllProductsName(): Promise<void>
    {
        const productsName = await this.productName.allInnerTexts()  //it returns string[]
        console.log(productsName)

        for(let pName of productsName)
        {
            console.log(pName)
        }
    }
    async getProductPrice(index: number): Promise<string | null>
    {
        return await this.productPrice.nth(index).textContent()  //Rs. 500
    }
    async getProductQuantity(index: number): Promise<number>
    {
        const quantity = await this.productQuantity.nth(index).textContent()  
        return Number(quantity) //"12" ==> 12 type conversion
    }
}
    