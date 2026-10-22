import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

let home: HomePage       //Declaration
let login: LoginPage        

test.beforeEach(async({page})=>{
    home = new HomePage(page)        //Initialization
    login = new LoginPage(page)

    await home.gotoHomePage()
    await home.clickSignupLoginBtn()
})

test('Valid Login Test', async({page})=>{
    await login.loginAs("newtesting@gmail.com", "newtesting@123") //Action

    await expect(login.loggedUser).toBeVisible()    //Verification
    await expect(page).toHaveURL('https://automationexercise.com/')
})

test('InValid Login Test', async({page})=>{
    await login.loginAs("wronguser@gmail.com", "wronguser@123")

    await expect(login.errorMsg).toBeVisible()
})

test('Empty login', async({page})=>{
    await login.loginAs("", "")

    await expect(page).toHaveURL("https://automationexercise.com/login")  //Verification
    expect(await login.loggedUser.isVisible()).toBeFalsy()
})


