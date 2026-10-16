//Hooks are used to execute common code before or after test cases.
//They help us avoid repeating the same setup and cleanup code every test

//beforeAll() --> Once run before all test cases
//afterAll() --> Once run after all test cases
//beforeEach() --> runs before each test
//afterEach() --> runs after each tests

import { test, expect } from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Start")
    //Connect to Database (Start Server)
    //Create Test Data

})

test.beforeEach(async({page})=>{
    console.log("Before Each")
    await page.goto("https://letcode.in/")

    //Common Setup
    //URL Launch
    //Login
})

test('Test case 1', async({page})=>{
    console.log("Test Case 1")
    await expect(page).toHaveTitle('LetCode with Koushik | Software Test Automation Hub')
})

test('Test case 2', async({page})=>{
    console.log("Test Case 2")
    await expect(page).toHaveURL('https://letcode.in/')
})

test('Test case 3', async({page})=>{
    console.log("Test Case 3")
    const practice =  page.locator("//a[text()='Start Practicing']")
    await expect(practice).toBeVisible()
})

test.afterEach(async({page})=>{
    console.log("After Each")
    //await page.screenshot({path:`letcode/test_${Date.now()}.png`, fullPage: true})
    //Logout
    //Test data Clean
    //Screenshot


})

test.afterAll(async()=>{
    console.log("Stop")
    //Close Database
    //Clean up resources
    //Test data delete
})
