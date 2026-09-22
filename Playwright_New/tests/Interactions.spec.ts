import {test} from '@playwright/test'

test('Interaction', async({page})=>{
    // //await page.goto("https://www.amazon.in/")

    // //fill() => enter the text as quick (textbox, inputbox)
    // //await page.locator('#twotabsearchtextbox').fill('Laptop')
    // //await page.fill('#twotabsearchtextbox', 'Laptop')

    // //type()
    // //await page.locator('#twotabsearchtextbox').type('Laptop')

    // //pressSequentially()  ==> typing character by character
    // //await page.locator('#twotabsearchtextbox').pressSequentially("Laptop")

    // //click() ==> button, radio, link
    // // await page.locator('#nav-search-submit-button').click()
    
    // // await page.getByText('AmazonBasics').click()

    // //clear()
    // //await page.locator('#twotabsearchtextbox').clear()

    // await page.goto("https://testautomationpractice.blogspot.com/")

    // //radio
    // await page.locator('#male').click()
    // await page.locator('#male').check()

    // //check() ==> radio button, checkbox
    // await page.locator('#sunday').check()
    // await page.locator('#monday').check()

    // //uncheck() ==> check box
    // await page.locator('#sunday').uncheck()

    // //dropDown
    
    // await page.locator('#country').selectOption('germany') //select by value (option value attribute)
    // await page.locator('#country').selectOption({label: 'Canada'}) //select by visible text 
    // await page.locator('#country').selectOption({index: 3}) //select by index

    // await page.locator('#colors').selectOption(['red', 'blue', 'green'])
    await page.locator('#colors').selectOption([{index: 1}, {index: 2}, {index: 3}])
    // //await page.locator('#country').selectOption('United States')

    // await page.waitForTimeout(3000)

    // //hover()
    // await page.locator('.dropbtn').hover()
    // await page.getByText('Mobiles').click()

    // //double clcik ==> dblclick()
    // await page.getByText('Copy Text').dblclick()

    // //Right Click
    // await page.getByText('Copy Text').click({button: 'right'})

    // //Drag and Drop
    // await page.dragAndDrop('#draggable', '#droppable')

    // //press (Keyboard activities)
    // await page.getByRole('combobox', {name: 'Search'}).fill("Selenium")
    // await page.getByRole('combobox', {name: 'Search'}).press('Enter')

    // await page.locator('#Wikipedia1_wikipedia-search-input').focus()
    // await page.locator('#Wikipedia1_wikipedia-search-input').fill("Java")
    // await page.locator('#Wikipedia1_wikipedia-search-input').press('Tab')
    // await page.locator('#Wikipedia1_wikipedia-search-input').press('Enter')

    // await page.locator('#name').fill('ABCDEF')
    // await page.locator('#name').press('Control+A')
    // await page.locator('#name').press('Control+X')
    // //await page.locator('#email').focus()
    // await page.locator('#name').press('Tab')
    // await page.locator('#email').press('Control+V')

    //Upload
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt') //path
    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data1.txt', 'E:\\Data.docx'])
    
    //Scroll
   // await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()


    //Mouse
    await page.mouse.wheel(0, 1000) //Scroll Down
    await page.mouse.wheel(0, -1000) //Scroll Up

    await page.mouse.wheel(1000, 0) //Scroll Right
    await page.mouse.wheel(-1000, 0) //Scroll Left


    await page.waitForTimeout(3000)


    //fill()
    //pressSquentially()
    //click()
    //clear()
    //check()
    //uncheck()
    //dblclick()
    //hover()
    //right ==> click() button: 'right'
    //dragAndDrop() 
    //dropDown (selectOption) --> value, visible text (label: 'UK'), index (index: 1)
    //press() --> keyboard press key
    //setInputFiles() -- File upload
    //scrollIntoIfViewNeeded()
    //focus()
    //screenshot()





})