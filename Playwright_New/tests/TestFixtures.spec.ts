//Test Fixtures

//A fixture provides everything a test needs to execute

//Test Fixture is pre-defined setup or reusable object

//common playwright fixtures

//browser  ==> Browser Instance (browser obejct)
//context ==> seperate browser session
//page ==> Browse Tab/Page
//browserName ==> to get the name of the browser
//request ==> API request Object


import { test, chromium, firefox, webkit } from '@playwright/test'

test('Fixture_1', async()=>{
    const browser = await webkit.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})

test('Fixture_2', async({browser})=>{
   // const browser = await chromium.launch()  no need to launch chromium 

   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto("https://www.amazon.in/")
})

test('Fixture_3', async({context})=>{
   // const browser = await chromium.launch()  no need to launch chromium 
   //const context = await browser.newContext() //no need to create browser instance
    
   const page = await context.newPage()
   await page.goto("https://www.amazon.in/")
})

test('Fixture_4', async({page})=>{
   // const browser = await chromium.launch()  no need to launch chromium 
   //const context = await browser.newContext() //no need to create browser instance
   //const page = await context.newPage()   //no need to create context  

   await page.goto("https://www.amazon.in/")
   
   //page.goto()  //Page
   //page.locator()                               //Locator
   //page.getByRole()
   //page.waitForURL() 
   //page.title()                                 //Page
   //page.url()                                   //Page
   //page.goBack() //navigate to the previous page   //Page
   //page.goForward //navigate to the next page  //Page
   //page.reload() //reload the current page     //Page
   //page.click('#id')                           //Locator
   //page.fill('#id', "laptop")                  //Locator


   //browser.newContext()  
   //browser.close()
   //browser.newContexts()

   //Browser  ==> browser.newContext() 
   //BrowserContext  ==> context.newPage()
   //Page ==> page.locator()

})


test('Two users login test', async({browser})=>{
   const context1 = await browser.newContext()
   const context2 = await browser.newContext()

   const page1 = await context1.newPage()
   const page2 = await context2.newPage()

   await page1.goto("https://www.saucedemo.com/")
   await page1.waitForTimeout(3000)
   await page1.locator("#user-name").fill("standard_user")
   await page1.locator("#password").fill("secret_sauce")
   await page1.locator('#login-button').click()

   await page2.goto("https://www.saucedemo.com/")
   await page2.waitForTimeout(3000)
   await page2.locator("#user-name").fill("problem_user")
   await page2.locator("#password").fill("secret_sauce")
   await page2.locator('#login-button').click()

})
