import { Page, Locator } from '@playwright/test'

class ProductPage
{
    //Properties
    page: Page                //Instance Variable  //Declaration only happen must need initialization 
    productHeader: Locator
    productWrapper: Locator
    addToCartBtn: Locator
    continueShopping: Locator
    viewCartLink: Locator
    constructor(page: Page)   //Local Variable
    {
        this.page = page
        this.productHeader = page.locator('.title.text-center')
        this.productWrapper = page.locator('.product-image-wrapper')
        this.addToCartBtn = page.locator('.overlay-content>a')
        //this.addToCartBtn = page.locator('//div[@class="overlay-content"]/child::a')
        this.continueShopping = page.getByText("Continue Shopping")
        this.viewCartLink = page.locator('[href="/view_cart"]').last()
        //this.viewCartLink = page.locator('//u/parent::a[@href="/view_cart"]')
    }

    //Methods
    
    async isProductPageLoaded(): Promise<boolean>
    {
        await this.page.waitForLoadState('load')
        return await this.productHeader.isVisible() 
    }
    async addProductToCart(index: number): Promise<void>
    {
        await this.productWrapper.nth(index).hover()
        await this.addToCartBtn.nth(index).click()
    }
    async clickContinueShopping(): Promise<void>
    {
        await this.continueShopping.click()
    }
    async clickViewcart(): Promise<void>
    {
        await this.viewCartLink.click()
    }
}

// let product = new ProductPage(page)
// product.isProductPageLoaded()  //true
// product.addProductToCart(1)

//toBeVisible() ==> assertion (verification)       //isVisible() ==> it returns boolean value (true/false)