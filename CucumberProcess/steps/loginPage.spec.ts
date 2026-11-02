import { Given, When, Then } from  '@cucumber/cucumber'
import { CustomWorld } from '../hooks/world'
import { LoginPage } from '../pages/LoginPage'
import { expect } from '@playwright/test'   //Verification

let loginPage: LoginPage

Given('user navigate to the login page', async function(this: CustomWorld){
    loginPage = new LoginPage(this.page)
    await loginPage.gotoHomPage()
})
Given('user enters username and password', async function(this: CustomWorld){
    await loginPage.enterLoginDetails('sonya.a@gmail.com', "sonya@123")
})
Given('user enters invalid username and password', async function(){
    await loginPage.enterLoginDetails('wronguser@gmail.com', 'wronguser@123')
})
When('user clicks the login button', async function(){
    await loginPage.clickLogin()
})
Then('user navigate to the user home page', async function(){
    const userProfileEmailId = await loginPage.VerifyLogin()
    console.log(userProfileEmailId)

    expect(userProfileEmailId).toBe('sonya.a@gmail.com')
})
Then('user could see an error message', async function(){
    const isErrorMsgPresent = await loginPage.isErrorMessageVisible()

    expect(isErrorMsgPresent).toBeTruthy()
})


