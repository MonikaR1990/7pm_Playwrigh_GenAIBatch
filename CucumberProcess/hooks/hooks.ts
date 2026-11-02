import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium} from "@playwright/test";
import { CustomWorld } from "./world";

setDefaultTimeout(30000)

Before(async function(){
    this.browser = await chromium.launch({headless: false})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
})

After(async function(){
    if(this.page)
    {
        await this.page.close()
    }
    if(this.context)
    {
        await this.context.close()
    }
    if(this.browser)
    {
        await this.browser.close()
    }
})















//Hooks

//beforeAll 
//afterAll
//beforeEach
//afterEach

//cucumber
//Before             --> Executes before each scenario
//After              --> Executes after each scenario
//BeforeAll 
//AfterAll
//BeforeStep
//AfterStep