import { World, IWorldOptions } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page } from '@playwright/test'

export class CustomWorld extends World
{
    browser !: Browser                //Definite Assignment Assertion Operator
    context !: BrowserContext
    page !: Page
    constructor(option: IWorldOptions)
    {
        super(option)
    }
}







//World --> Cucumber provides this class
//IWorldOptions --> Cucumber privides this inerface (It is typescript interface provided by cucumber. it is used to pass the information)

//Browser ==> Represent the brwser instance
//BrowserContext ==> It represents the isolate browser session
//Page ==> Represents the Browser Tab/page

// browser !: Browser  ==>  "Dont'Worry  I promise I will assign a value to this property Before I use"  