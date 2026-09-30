import {test} from '@playwright/test'

test('Google Launch', async({page})=>{
    await page.goto("https://www.google.com/") //30 sec
    await page.locator('#twotabsearchtextbox').fill('Laptop')
})