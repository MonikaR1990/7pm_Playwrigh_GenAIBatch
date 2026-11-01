import { Page, Locator } from '@playwright/test'

class LoginPage
{
    page: Page
    email: Locator
    password: Locator
    loginBtn: Locator
    userProfile: Locator
    errorMsg: Locator
    constructor(page: Page)
    {
        this.page = page
        this.email = page.locator('#Email')
        this.password = page.locator('#Password')
        this.loginBtn = page.locator('.button-1.login-button')
        this.userProfile = page.locator('.account').first()
        this.errorMsg = page.locator('.validation-summary-errors')
    }

    async gotoHomPage(): Promise<void>
    {
        await this.page.goto("https://demowebshop.tricentis.com/")
    }
    async enterLoginDetails(username: string, password: string): Promise<void>
    {
        await this.email.fill(username)
        await this.password.fill(password)
    }
    async clickLogin(): Promise<void>
    {
        await this.loginBtn.click()
    }
    async VerifyLogin(): Promise<string | null>
    {
        return await this.userProfile.textContent()
    }
    async isErrorMessageVisible(): Promise<boolean>
    {
        return await this.errorMsg.isVisible()
    }

}