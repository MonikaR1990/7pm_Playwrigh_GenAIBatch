import { test } from '@playwright/test'

test('Dialog Box Accept', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{          //on() -> Register Event Handler
        await page.waitForTimeout(3000)
        await dialog.accept()
    })

    await page.locator('#accept').click()
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





*/