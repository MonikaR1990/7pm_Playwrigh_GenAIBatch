import { test, expect }  from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'


test('Add Producto to Cart and Test', async({page})=>{
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.gotoHomePage() //application url open
    await home.clickSignupLoginBtn() 

    await login.loginAs("newtesting@gmail.com", "newtesting@123")
    await login.clickProductPage()

    let product = new ProductPage(page)
    let cart = new CartPage(page)

    //Verify the Product Page is Loaded
    expect(await product.isProductPageLoaded()).toBeTruthy() 

    //Add First Product
    await product.addProductToCart(0)  //Blue Top
    await product.clickContinueShopping()

    //Add Second Product
    await product.addProductToCart(4)  //Winter Top
    await product.clickViewcart()

    //Confirm Cart Page is Loaded
    expect(await cart.isCartPageLoaded()).toBeTruthy()

    //Validate the Product Count
    expect(await cart.getCartProductCount()).toBe(2)

    //Validate Product Name
    expect(await cart.getProductName(0)).toBe('Blue Top')
    expect(await cart.getProductName(1)).toBe('Winter Top')

    //Validate Product Price
    expect(await cart.getProductPrice(0)).toContain('500')
    expect(await cart.getProductPrice(1)).toContain('600')

    //Validate Product Quantity
    expect(await cart.getProductQuantity(0)).toBe(1)
    expect(await cart.getProductQuantity(1)).toBe(1)

})
