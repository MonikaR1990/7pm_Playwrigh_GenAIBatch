import {test} from '@playwright/test'

test('Google Launch', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.locator('#username').fill("Bala")
    await page.locator('#password').fill("Bala")
})