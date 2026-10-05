//Wait

//Auto Wait (30 secs or 30 milli seconds)

//Selenium implicit wait, explicit wait

//timeout exceed issue:
//1. Wrong xpath or selector
//2. element load and visible take more than 30 secs (application slow)
//3. element present iframe
//4. element exist in DOM not present in UI
//5. page not load fully
//6. element in disable mode
//7. Dynamic elements

/*
1. Is the selector correct?
↓
2. Is the element actually present?
↓
3. Is it visible?
↓
4. Is it enabled/clickable?
↓
5. Is it inside an iframe?
↓
6. Are you on the correct page?
↓
7. Is the application/API loading properly?

//Auto Wait

 
//Explicit Wait default 30 seconds, other wise timeout set
//1. waitFor() 
    Waits for a locator/element to raech a specified state such as visible, hiiden, attached, detached

    state:
    //visible - element exists in the DOM and is visible to the user on the page
    //hidden - element present in DOM but user can't see
    //attached - element exists in the DOM (but the element may or may not exist in DOM)
    //detached - element completely removed from DOM

    attached != visible


//waitForSelector()
    Waits for an element matching a given selector to reach specfic state

//waitFor() ==> Locator  ==> I already have a locator, playwright wait for that Locator
//waitForSelector() ==> Page ==> I give selector, playwright wait for it

//waitForLoadSate()
    //it is used to wat until a particular page loading state is reached before continue other next steps

    //Three page load state (event)
    //1. domcontentloaded ==> wait unitil the HTML is parsed and DOM Created after that do next Step
    //2. load ==> wait until the page's load events occurs (all resources loaded)
    //3. newtworkidle ==> wait untill the page has no active network connections for 500ms

    //domcontentloaded
    /*
        Browser Request Page (amazon.com)
            |
        HTML Recived
            |
        HTML is parsed
            |
        DOM is Created
            |
        Other Resources may still be loading 


        Resources
        =========
        HTML
        CSS
        Script
        Images
        Fonts
        Videos
        Audios


        Browser
        |
        HTML
        |
        DOM Create
        |
        DOMContentedLoaded


        CSS
        Script
        Images
        Fonts
        Videos
        Audios

        networkIdel

        Page Starts
            |
        HTML Request
        CSS Request
        JS Request
        Product API
        Image Request
        Video Request
            |

        Network becomes Idle

            |
        
            500 ms secs wait (networkIdle)


        

        DOM ==> DOM Ready

        Load ==> All Resources Loaded

        




    */


//waitForURL()
    //Wait untill expected url reacheas 
    //click --> url changes --> wait untill expected URL --> continue 

//waitForEvent()
//waitForTimeOut()
//waitForRequest()
//waitForResponse()





import { test, expect } from '@playwright/test'

test('waitFor()', async({page})=>{
    await page.goto("https://www.amazon.in/")
    const searchBtn = page.locator('input#twotabsearchtextbox')
    //await searchBtn.waitFor()
    await searchBtn.waitFor({state: 'visible', timeout: 50000}) 
    await searchBtn.waitFor({state: 'attached'}) 
})

test('waitForSelector()', async({page})=>{
    await page.goto("https://www.amazon.in/") 
    await page.waitForSelector('input#twotabsearchtextbox', {state: 'visible'})
    await page.locator('input#twotabsearchtextbox').fill("Laptop")
})

test('waitForURL()', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await page.waitForURL('https://www.saucedemo.com/inventory.html', {timeout: 50000})

    await page.waitForURL('**/inventory.html') //containa word

    await page.waitForURL(/inventory/) //regex


    const products = await page.locator('.inventory_item_name ').allInnerTexts()
    console.log(products)
})

test('waitForLoadSate', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await page.waitForLoadState('domcontentloaded')
    await page.waitForLoadState('load')

    const products = await page.locator('.inventory_item_name ').allInnerTexts()
    console.log(products)
})

test('waitForLoadSate_networkIdle', async({page})=>{
    await page.goto("https://www.amazon.in/") 
    await page.waitForLoadState('networkidle') //wait untill the page has no active network connections for 500ms
    await page.locator('input#twotabsearchtextbox').fill("Laptop")
})

test('waitForTimeOut()', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    //await page.waitForTimeout(3000) 

    const products = await page.locator('.inventory_item_name ').allInnerTexts()
    console.log(products)
})