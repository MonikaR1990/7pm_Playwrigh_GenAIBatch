import { test } from '@playwright/test'

test('Window Handle Popup', async({page})=>{
    await page.goto("https://letcode.in/window")
   

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), //newPage
        page.locator('#home').click() //clickResult
    ])

   

    const mainPage = page.url()
    console.log("Main Page URL: ", mainPage)

    const newPageURL = newPage.url()
    console.log("New Page URL: " , newPageURL)

    await newPage.getByPlaceholder('Search practice labs...').fill("Selenium")
    await newPage.waitForTimeout(3000)
})

//Promise.all() ==> used to handle multiple asynchronous process and you want to all completed

//page --> locator click --> one tab/a new window open (popup)
//page --> represents tab 1 --> https://letcode.in/window
//newPage --> represents tab 2 --> https://letcode.in/test

//page.waitForEvent('popup')

/*
    page
    |
    wait for popup
    | 
    | (click)
    |
    new browser tab open
    |
    |
    page.waitForEvent('popup') --> returns that Page Object
    |
    |
    newPage

*/






// const fruits = ["apple", "mango", "banana"]

// console.log(fruits[0])

// const [f1] = fruits

// console.log(f1)
// console.log(f2)
