import { test } from '../tests/SearchFixture.spec'
import { expect } from '@playwright/test'

test('Verify Amazon Search Result by URL', async({search})=>{
    await expect(search).toHaveURL(/Laptop/)
})
test('Verify Amazon Search Result by Title', async({search})=>{
    await expect(search).toHaveTitle('Amazon.in : iphone')
})

test('Verify Amazon Search Result by Elememnt', async({search})=>{
    const searchText = search.locator('.a-color-state.a-text-bold')
    await expect(searchText).toContainText('Laptop')
})

//class ==> properties (variables) and methods (function)