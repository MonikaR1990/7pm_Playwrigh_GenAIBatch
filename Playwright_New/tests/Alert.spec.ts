import { test, expect } from '@playwright/test'

test('Dialog Box Accept', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{          //on() -> Register Event Handler
        await page.waitForTimeout(3000)
        console.log(dialog.message())
        await dialog.accept()
    })

    await page.locator('#accept').click()
})

test('Dialog Box Dismiss', async({ page })=>{
        await page.goto("https://letcode.in/alert/")

        page.on('dialog', async confirm=>{
          await page.waitForTimeout(3000)
          await confirm.dismiss()  
          console.log(confirm.message())
          
          expect(confirm.message()).toContain("Are you happy with LetCode?")
        })

        await page.locator('#confirm').click()
})

test('Dialog Box Prompt', async({ page })=>{
        await page.goto("https://letcode.in/alert/")

        page.on('dialog', async prompt=>{
          await page.waitForTimeout(3000)
          await prompt.accept("MONIKA R")  
          console.log(prompt.message())
          
        })

        expect(await page.locator('#myName').textContent()).toContain('MONIKA R')

        await page.locator('#prompt').click()
})


/*
    Register Alert Handler        on()
            |
    Click Button
            |
    Alert Triggered or open
            |
    Handler catches Alert(dialog)
            |
    Accept / Dissmiss


//dialog event itself have 3 methods
//1. accept()  
//2. dismiss()
//3. message()
//4. accept("Hello")     for prompt

*/