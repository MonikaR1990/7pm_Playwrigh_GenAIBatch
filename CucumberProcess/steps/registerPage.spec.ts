import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../hooks/world";
import { RegisterPage } from "../pages/RegisterPage";
import { expect } from "@playwright/test";

let registerPage: RegisterPage

Given('user navigate to the registration page', async function (this: CustomWorld) {
    registerPage = new RegisterPage(this.page)
    await registerPage.navigateRegisterPage()
})
When('user selects gender', async function(){
    await registerPage.selectGender('female')
})
When('user enters the valid details', async function(){
    await registerPage.userEnterDetails()
})
When('user clicks the registration button', async function(){
    await registerPage.clickReisterBtn()
})
When('user enters the details with an already registered email', async function(){
    await registerPage.selectGender('female')
    await registerPage.userEnterDetails()
})
Then('user should see register successful message', async function(){
    const successMsg = await registerPage.getSuccessMsg()
    console.log(successMsg)

    expect(successMsg).toContain('completed')
})
Then('user should see an email already exists error message', async function () {
    const isErrorMsgPresent = await registerPage.getErrorMsg()

    expect(isErrorMsgPresent).toBeTruthy()
})
