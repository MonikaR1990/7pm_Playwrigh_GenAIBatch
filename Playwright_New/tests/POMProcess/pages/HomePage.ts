import { Page, Locator } from '@playwright/test'

export class HomePage
{
    //Properties
    page: Page 
    signupLoginBtn: Locator          //Instance Variable       //Page interface ==> page variable I will assign as type
    constructor(page: Page)         //local variable
    {
        this.page = page
        this.signupLoginBtn = page.locator('[href="/login"]')
    }

    //Methods (actions)
    async gotoHomePage(): Promise<void>
    {
        await this.page.goto("https://automationexercise.com/")
    }

    async clickSignupLoginBtn(): Promise<void>
    {
        await this.signupLoginBtn.click()
    }

} 
