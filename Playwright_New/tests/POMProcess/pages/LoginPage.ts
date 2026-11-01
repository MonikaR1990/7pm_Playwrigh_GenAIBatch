import { Page, Locator } from '@playwright/test'

export class LoginPage
{
    //Properties
    page: Page
    emailAddress: Locator
    password: Locator
    loginBtn: Locator
    loggedUser: Locator
    errorMsg: Locator
    productPageLink: Locator
    constructor(page: Page)
    {
        this.page = page
        this.emailAddress = page.locator('[data-qa="login-email"]')
        this.password = page.locator('[data-qa="login-password"]')
        this.loginBtn = page.locator('[data-qa="login-button"]')

        //this.loggedUser = page.locator('//a[contains(text(),"Logged")]')
        this.loggedUser = page.getByText('logged')
        this.errorMsg = page.getByText('incorrect')

        this.productPageLink = page.locator('[href="/products"]')
    }

    async loginAs(username: string, password: string): Promise<void>
    {
        await this.emailAddress.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async clickProductPage(): Promise<void>
    {
        await this.productPageLink.click()
    }
    
}

