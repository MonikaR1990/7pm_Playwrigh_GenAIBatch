import { test, expect } from '@playwright/test'

test('API Request Mock using Playwright', async({page})=>{

    //Mock the API before navigating
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async route=>{
        const json = [
            { name: 'Playwright', id: 101},
            { name: 'Selenium', id: 102},
            { name: 'Cypress', id: 103},
            { name: 'TOSCA', id: 104},
            { name: 'QTP', id: 105},
        ]
        await route.fulfill({json})
    })

    await page.goto('https://demo.playwright.dev/api-mocking/')

    await page.waitForTimeout(5000);


})