import {test} from '@playwright/test'

test('My Title', async({page})=>{
    await page.goto("https://www.google.com/")
})

