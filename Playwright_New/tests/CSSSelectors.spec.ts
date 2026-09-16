//CSS Selector
//Xpath

import {test} from '@playwright/test'

test('CSS Selector', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("Laptop")
    await page.locator('#nav-search-submit-button').click()
    await page.locator('textarea.nav-input.nav-progressive-attribute').fill("Laptop")
    await page.locator('.nav-input.nav-progressive-attribute').click()
    await page.locator('[name="field-keywords"]').fill("Laptop")
    await page.locator('[placeholder="Search Amazon.in"]').fill("Laptop")
    await page.locator('[aria-label="Search"]').click()
    await page.locator('[aria-label="Search"][name="q"]').fill("Lpatop")
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('.form-control#name').fill("Bala")
    await page.goto("https://the-internet.herokuapp.com/login")
    
    await page.locator('input').first().fill('Bala') //2
    await page.locator('input').last().fill('G')
    await page.locator('input').nth(1).fill('G')
    await page.locator('input').nth(0).fill('V') //index
    await page.locator('button').click()

    await page.locator('[id*="name"]').first().fill("Parveen")
    await page.locator('[id*="name"]').last().fill("G")

    await page.locator('input[placeholder^="Enter"]').fill('Bala')

    //Visible Text
    await page.locator('text=Data Entry Form').click()
    await page.locator('a:has-text("Data Entry Form")').click()

})



//CSS Selector
//1. id --> #
//2. class --> .
//3. other attributes --> [attribute = 'value']
//4. multiple attributes --> [attribute = 'value'][attribute = 'value'] or .className#id
//5. tag name --> 'tagname' 
//6. index based methods --> first(), last(), nth()
//7. contains --> *
//6. startswith --> ^
//8. endswith ---> $
//9. with tag name --> input#twotabsearchtextbox,  textarea.nav-input.nav-progressive-attribute\
//10. Descentant Selector (grant parent, parent, child) for all things use --> space ==> .nav-fill .nav-search-field input  #login_form [aria-label="Log in"]
//11. Direct Child ==> ">" use greater than symbol ==> .nav-fill > .nav-search-field 
//12. Adjecent Sibling ==> "+" (only next sibling only shown) ==> [value="search-alias=alexa-skills"] + option
//13. Genral Sibling ==> "~" (get all sibling)
//14. nth-child(index) ==> [title="Search in"]>option:nth-child(7)
//15. first-child ==> [title="Search in"]>option:first-child
//16. last-child ==> [title="Search in"]>option:last-child


// <div >
//     <h2>Login</h2>
//     <p>Error</p>       h2 + p //Error
//     <p>Invalid</p>     h2 ~ p //Error and  Invalid
//     <span>Help</span>  h2 ~ p
// </div>

//CSS is a locator technique used to identify the elements in a web page