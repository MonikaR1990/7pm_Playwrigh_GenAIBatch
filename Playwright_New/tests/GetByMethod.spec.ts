import {test} from '@playwright/test'

test('GetByMethod', async({page})=>{
    // await page.goto("https://testautomationpractice.blogspot.com/")

    // //getByText()
    await page.locator('text= Data Entry Form').click()//CSS selector
    await page.locator("//h3[contains(text(),'Data Entry Form')]").click() //xpath
    await page.getByText('Data Entry Form').click()
    await page.getByText('AmazonBasics').click()
    await page.getByText('Data Entry').click()
    await page.getByText('About').click()

    // //getByRole()
    await page.getByRole('searchbox', {name: 'Search Amazon.in'}).click()
    await page.getByRole('link', {name: 'About'}).click()
    await page.getByRole('searchbox', {name:'Search'}).click()
    await page.getByRole('button', {name:'Google Search'}).click()
    await page.getByRole('img', {name:'Google'}).click()
    await page.getByRole('button', {name:'Search for Products, Brands and More'})

    // //getByPlaceholder() //based on placeholder attribute in the element
    await page.getByPlaceholder('Search for Products, Brands and More').click()
    await page.locator('[placeholder="Search for Products, Brands and More"]').click()
    await page.getByPlaceholder('Search Amazon.in').click()

    // //getByTitle() //based on title attribute in the element 
    await page.getByTitle('Search for Products, Brands and More').click()
    await page.getByTitle('Search for Products, Brands and More').click()

    // //getByTestId() //based on attribute data-testid
    await page.goto("https://www.passthenote.com/auth/login") 
    await page.getByTestId('ptn-login-email-input').fill("abc")
    await page.getByTestId('ptn-login-password-input').fill("1243423")

    await page.goto("https://www.amazon.in/")
    await page.getByLabel('Search Amazon.in').fill('Laptop')

    await page.waitForTimeout(5000)

    /*
    <label>Email<label>
    <input id=897 class='yyuiyui' name="yiuyiuy">
    */

    //getByAltText //it is based on alt attribute text (image text)
    await page.getByAltText('Vinoth Tech Solutions').click()

    await page.getByRole('img', {name: 'Google'}).click()











    
    //name==> visible text, (aria-label, value, aria-describedBy) attributes 


})