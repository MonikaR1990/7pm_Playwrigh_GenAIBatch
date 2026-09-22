import {test} from '@playwright/test'

test('Xpath', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Based on Attribute
    await page.locator("//input[@id='name']").fill("Mani")
    await page.locator("//input[@placeholder='Enter Name']").fill("G")
    await page.locator("//input[@class='form-control'][@id='name']").fill("Banu")
    await page.locator("//input[@class='form-control' or @id='name']").fill("Raghu")
    await page.locator("//input[contains(@id,'name')]").fill("Ram")
    await page.locator("//input[starts-with(@id,'name')]").fill("Babu")
    //no ends-with

    //Based on Visible Text
    await page.locator("//a[text()='Data Entry Form']").click()
    await page.locator("//a[text()='Udemy Courses']").click()
    await page.locator("//a[text()='Online Trainings']").click()
    await page.locator("//a[contains(text(),'Entry')]").click()
    await page.locator("//a[starts-with(text(),'Data')]").click()

    //Find parent element using child element
    await page.locator("//option[text()='Baby']/parent::select").click()

    //Find child element using parent element
    await page.locator("//select[@name='url']/child::option").click()

    //Find the Ancestor (Grand Parent) using Descendant (Garnd child)
    await page.locator("//option[text()='Baby']/ancestor::form").click()

    //Find the Descend  ant (Garnd Child) using Ancestor (Grand Parent)
    await page.locator("//form[@id='nav-search-bar-form']/descendant::select").click()

    //Find following elements (all elements after the main element)
    //option[text()='All Categories']/following::option

    //Find following elements (on its own family after the main element)
    //option[text()='All Categories']/following-sibling::option
     
    







    
})

//Xpath is a locator technique used to identify the elements in a web page

// "//" select from anywhere



//1995

//Live Script

//NetScape

//JavaScript

//1997  => ECMA Script

//ECMA ==> ES1

//ES2

//ES3

//ES4

//ES5



//2009 ==> Node.js

////ES6 ==> 2015


//HTML ==> Display content (Internal Structure)
//CSS ==> Design Pattern
//JavaScript ==> make the webpage Interactive 

//React
//Angular
//vue


//Node.js
//Express.js
//Next

//Java ==> high secure, heavy compiler, 

//JavaScript ==> light weight language, no typesaftey