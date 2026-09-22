//Assertion = Testing or Verification

//actual
//expected

//Verify that the actual result matches the expected result

//Two Types of Assertion
//1. Hard Assertion
//2. Soft Assertion

//playwright test framework

//Browser Automation + Testing 

import {test, expect} from '@playwright/test'

//expect is playwright function to create an assertion

//1. toBeVisible

test('toBeVisible', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    const userProfile = page.locator('.account')

    await expect(userProfile).toBeVisible()
})







