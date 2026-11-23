import {test, expect} from '@playwright/test'

//CRUD ==> Read (GET)
test('Get All', async({request})=>{
    const response = await request.get("https://fakestoreapi.com/products")

    console.log(response)
    console.log(response.status()) //200

    console.log(response.ok())  //Contains a boolean stating whether the response was successful (status in the range 200-299) or not.

    const body = await response.json() //response body (data content)
    console.log(body) 
    
    console.log(response.headers())
    console.log(response.statusText())
    console.log(body[5].id)
    console.log(body[1].title) //"Mens Casual Premium Slim Fit T-Shirts "


    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    expect(body.length).toBe(20)
    expect(body.length).toBeGreaterThan(10)
    expect(body.length).toBeDefined()

    expect(body[1].title).toContain('Slim Fit T-Shirts')
    
})

// toContain ==> string
// toContainText ==> element visible text

// <p>Helllo</p>