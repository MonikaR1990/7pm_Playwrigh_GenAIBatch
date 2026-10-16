import { test } from '@playwright/test'

test('File Upload', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')

    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data1.txt', 'E:\\Data.docx', 'E:\\book.pdf'])

    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()
    
    await page.waitForTimeout(3000)
})