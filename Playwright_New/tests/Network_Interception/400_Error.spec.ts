import { test, expect } from '@playwright/test'

test('Verify 400 Bad Request', async({page})=>{
    
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async (route)=>{

        await route.fulfill({
            status: 400,
            contentType: 'application/json',
            json: { name: "Invalid Request"}
        })
    })

    await page.goto("https://demo.playwright.dev/api-mocking")
  
    const response = await page.waitForResponse('https://demo.playwright.dev/api-mocking/api/v1/fruits')
    expect(response.status()).toBe(400)

    await page.waitForTimeout(5000)

})