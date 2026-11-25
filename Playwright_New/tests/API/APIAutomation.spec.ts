import {test, expect} from '@playwright/test'
import { request } from 'node:http'

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
test('Get Single Product', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products/5')

    console.log(response.status()) //200

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    console.log(body)

    //expect(body.length).toBe(1)
    expect(body.id).toBe(5)
    expect(body.title).toContain('John Hardy')
})
test('Get Limited Product', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products?limit=5')

    console.log(response.status()) //200

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    const body = await response.json()
    console.log(body)

    expect(body.length).toBe(5)
    expect(body[4].id).toBe(5)
    expect(body[4].title).toContain('John Hardy')
})

test('Create Product - Post', async({request})=>{
    const response = await request.post('https://fakestoreapi.com/products', {
        data: {
            "title": "ABC Jewelery",
            "price": 700,
            "description": "ABC A+ Quality Jewels",
            "category": "Jewels",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
            "rating": {
                "rate": 3.6,
                "count": 145
            }
        }
    })

    console.log(response.status()) //201

    const body = await response.json()
    console.log(body)
    
    expect(response.status()).toBe(201)
    expect(body.id).toBe(21)
})

test('Update Product', async({request})=>{
    const response = await request.put('https://fakestoreapi.com/products/9', {
        data: {
            "price": 74  
        }
    })

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    expect(body.price).toBe(74);

})

test('Delete Product', async({request})=>{
    const response = await request.delete('https://fakestoreapi.com/products/16')

    const body = await response.json()
    console.log(body)

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    
    expect(body.length).toBeEmpty()
})
