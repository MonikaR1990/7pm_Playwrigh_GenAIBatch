import { test, expect } from '@playwright/test'

test('Get the JSON from API and adds a new String', async({page})=>{

    //Get the response from the API
    await page.route('https://demo.playwright.dev/api-mocking/api/v1/fruits', async(route)=>{
        const response = await route.fetch();
        const json = await response.json()

        json.push({name: 'Playwright', id: 101})
        json.push({name: 'Selenium', id: 102})
        json.push({name: 'Cypress', id: 103})
        json.push({name: 'TOSCA', id: 104})
        json.push({name: 'QTP', id: 105})

        //Fullfilling the original response, while patching the response body
        await route.fulfill({response, json})

    })

    await page.goto('https://demo.playwright.dev/api-mocking')

    //await page.waitForTimeout(5000);

    await expect(page.getByText('Playwright')).toBeVisible()
    await expect(page.getByText('Selenium')).toBeVisible()
    await expect(page.getByText('Cypress')).toBeVisible()
    await expect(page.getByText('TOSCA')).toBeVisible()
    await expect(page.getByText('QTP')).toBeVisible()

    await page.waitForTimeout(10000)
})