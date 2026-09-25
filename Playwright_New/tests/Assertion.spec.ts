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

test('toBeVisible1', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill("sonya@1235678") //wrong
    await page.locator('[value="Log in"]').click()

    const errorMsg = page.locator(".validation-summary-errors")

    await expect(errorMsg).toBeVisible()
})
test('toHaveText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    const userProfile = page.locator('.account').first()

    await expect(userProfile).toHaveText('sonya.a@gmail.com')

    await expect(page.locator('.ico-logout')).toHaveText('Log out')

})

test('toContainText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    const userProfile = page.locator('.account').first()

    await expect(userProfile).toContainText('sonya')

})
test('toHaveURL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await expect(page).toHaveURL("https://www.saucedemo.com") //failed Hard Assertion
    await expect(page).toHaveURL(/inventory.html/)
    console.log("Test Completed")
})
test('toHaveURL1', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill('Laptop')
    await page.locator('#nav-search-submit-button').click()

    await expect(page).toHaveURL(/Laptop/)
    
})
test('toHaveTitle', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill('Laptop')
    await page.locator('#nav-search-submit-button').click()

    await expect(page).toHaveTitle('Amazon.in : Laptop')
    
})
test('toBeEnbled', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill('Laptop')

    const searchBtn = page.locator('#nav-search-submit-button')

    await expect(searchBtn).toBeEnabled() //test pass

    await searchBtn.click()

    console.log("Search button is enabled and and clicked successfully")
})

test('toBeDisabled', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill('Laptop')

    const searchBtn = page.locator('#nav-search-submit-button')

    await expect(searchBtn).toBeEnabled() //test pass

    await searchBtn.click()

    console.log("Search button is enabled and and clicked successfully")
})

test('toHaveValue', async({page})=>{
    await page.goto("https://www.amazon.in/")
    const search = page.locator('#twotabsearchtextbox')

    await search.fill('Laptop')
    await expect(search).toHaveValue("Laptop")
})

test('toBeChecked', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#sunday').check()

    await expect(page.locator('#sunday')).toBeChecked()
    await page.locator('#sunday').uncheck()
    await expect(page.locator('#sunday')).not.toBeChecked() 
})

test('toHaveCount', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await page.waitForURL("https://www.saucedemo.com/inventory.html")
    
    const product = page.locator('.inventory_item_name')

    console.log(product)

    await expect(product).toHaveCount(6)
})

test('toHaveCount1', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/register")
    
    const inputBox = page.locator('label~input')
    await expect(inputBox).toHaveCount(5)
})



//Generic Test (toBe, toContain, toEqual, toBeTruthy, toBeFalsy)

test('toBe', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    const userProfile =  await page.locator('.account').first().textContent()
    console.log(userProfile)

    console.log(typeof(userProfile))

    expect(userProfile).toBe('sonya.a@gmail.com')
})


//toHaveText ==> verify the exact visible text of an element
//Hard Assertion ==> If the assertion passes --> execution continues
//               ==> If the assertion fails --> execution stops immediately at the point
//toBeEnabled ==> it is an assertion used to verify that an element is enabled and we can interacted with it
//toBeDisabled ==> it is used to verify that an input, button, checkbox or other control is disabled



//Name: 
//Email: 
//Password

//Register


//1. fill('Laptop') --> enters the value
//2. toHaveValue --> verifies the entered value

//toHaveValue Vs toHaveText

//toBeChecked ==> Verify whether a checkbox or radio button is selected