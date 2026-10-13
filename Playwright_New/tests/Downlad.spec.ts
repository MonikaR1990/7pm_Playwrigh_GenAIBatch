import { test } from '@playwright/test'

test('Download File', async({ page })=>{
    await page.goto("https://letcode.in/file")

    //Start listen/wait for the download event //a download event going happen so listen for the download event
    const downloadPromise = page.waitForEvent('download') //The Promise represents  a future result, the download may not ahve happend yey

    //Click the download button
    await page.locator('#xls').click()

    //Capture the download result 
    const downlodFile = await downloadPromise

    //Save the downloaded File
    await downlodFile.saveAs(`downloadedFiles/` + downlodFile.suggestedFilename())

    const path = await downlodFile.path()
    console.log(path)

    console.log(downlodFile.url())




})

//Promise ==> A representation an asynchronus operation that may complete in future

//downloadPromise ==> store the Promise (future result)

//downloadFile ==> DownloadObject (contains the resolved result)  