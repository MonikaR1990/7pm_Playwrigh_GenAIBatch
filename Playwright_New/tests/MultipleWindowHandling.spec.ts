import { test, Page } from '@playwright/test'

test('Multiple Windows Hablding', async({page, context})=>{ 
    await page.goto("https://letcode.in/window")
    
    await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        page.locator('#multi').click()
    ])

    let alertPage: Page | undefined
    let dropDownPage: Page | undefined

    for(let p of context.pages())
    {
        await page.waitForLoadState('load') 
        if(p.url().includes('/alert'))
        {
            alertPage = p
            await alertPage.bringToFront()
            console.log(alertPage.title())
            await alertPage.getByText('Contact').first().click()
            await alertPage.waitForTimeout(3000)
        } 
        if(p.url().includes('/dropdowns'))
        {
            dropDownPage = p
            await dropDownPage.bringToFront()
            console.log(dropDownPage.title())
            await dropDownPage.locator('#fruits').selectOption('2')
            await dropDownPage.waitForTimeout(3000)
        }
    }  

})


//page ==> represents one tab
//context ==> manages multiple tab/pages within the same browser context

//Page ==> it is an interface in playwright that defines the properties and methods available a browser tab
// |
//goto()
//locator()
//getByText()
//screenshot()...etc...


//page ==> a variable name page that refers to the url (page ex: sauce demo page) browser tab

let names = ["Bala", "Mani", "Ram"]

for(let n of names)
{
    console.log(n)
}