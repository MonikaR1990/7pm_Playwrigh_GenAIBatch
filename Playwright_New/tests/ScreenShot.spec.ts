import { test,expect } from '@playwright/test'

test('ScreenShot_1_FullPage', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: 'E:\\screenshotletcode1.jpg', fullPage: true})
})

test('ScreenShot_2_Normal', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: 'E:\\screenshotletcode1.jpg', fullPage: true})
})

test('ScreenShot_3_Particular_Element', async({page})=>{
    await page.goto("https://letcode.in/")
    const sandBox = page.locator("//span[text()='New! Playwright Quiz Sandbox Ready']/parent::div")
    await sandBox.screenshot({path: `screenshots/sandBox.png`})
})

test('ScreenShot_4', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await expect(page).toHaveURL('/inventorysssssssss/')

})

test('ScreenShot_5', async({page})=>{

    const timeStamp = Date.now() //number
    console.log(timeStamp)
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await page.screenshot({path:`screenshotNew/test_${timeStamp}.png`})

})

//1970 Jan 1 : 12 am 

// 1 sec to 1000 milliseconds
// 10 sec to 10000 milliseconds
// so many years ....1790865133851 milliseconds
