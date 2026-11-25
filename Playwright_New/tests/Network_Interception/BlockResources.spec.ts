import { test, expect } from '@playwright/test'

test('Block Unneccsary Resources', async({page})=>{

    await page.route('**/*', async route => {

        const request = route.request()

        const resourceType = request.resourceType()
        const url = request.url()

        if(resourceType === 'image')
        {
            console.log("Blocked: ", url)
            await route.abort()
        }
        else
        {
            await route.continue();
        }
    })

    const start = Date.now()

    await page.goto('https://www.amazon.in/')

    const end = Date.now()

    console.log("Page load time: ", end - start, 'ms')

    await page.waitForTimeout(5000);

})


//https://m.media-amazon.com/images/I/31VJTwebEcL._SY280_SX256_AC_Q70_.jpg

// Resource type	Examples
// image	        JPG, PNG, GIF, SVG, AVIF
// stylesheet	    CSS
// script	        JavaScript
// document	        HTML
// font	            WOFF, TTF
// xhr	            XMLHttpRequest
// fetch	        Fetch API

/*

route.request() ==> route represents the intercepted network request.

route.request() ==> returns the request object associated with that intercepted route.

It provides information about the request, such as:
- URL
- HTTP method
- Resource type
- Request headers
- Post data

route → Controls the intercepted network request.
route.request() → Gets information about the request.
request.url() → Gets the request URL.
route.abort() → Blocks the request.
route.continue() → Allows the request.

Matches all URL paths;

*/