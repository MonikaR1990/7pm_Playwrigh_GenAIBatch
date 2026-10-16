import { test as base } from '@playwright/test'
import { Page } from '@playwright/test'

type myFixture = {
    login: Page
}


const test = base.extend<myFixture>({
    login: async({page}, use)=>{
    
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator('#login-button').click()

    await use(page)

    }
})


















//test ==> playwright's original test function
//base ==> another variable name referring to the same function

//<> symbols used for typescript genrics
//use is a function provided playwright's fixture system
