import { test } from '@playwright/test'

test('Iframe', async({page})=>{
    await page.goto("https://letcode.in/frame")

    const frame1 = page.frameLocator('#firstFr')

    //console.log(frame1)

    await frame1.locator('[name="fname"]').fill("Bala")
    await frame1.locator('[name="lname"]').fill("Krishna")

    
    const frame2 = frame1.frameLocator('[src="/innerframe"]')

    await frame2.locator('[name="email"]').fill("balakrishna@gmail.com")

})
