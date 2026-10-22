import { test as base } from '@playwright/test'
import { Page } from '@playwright/test'

type mySearchFixture = {
    search: Page
}

export const test = base.extend<mySearchFixture>({
    search: async({page}, use) => {

    await page.goto("https://www.amazon.in/")

    //search the Laptop
    await page.locator('input#twotabsearchtextbox').fill('Laptop')
    await page.locator('#nav-search-submit-button').click()
    
    await use(page)
    }
})


