 //Callback

function greet(callback)              //callback = sayHi
{
    console.log("Hello")
    callback()

}

function sayHi()
{
    console.log("SayHi")
}

//greet(sayHi)

//A callback is a function passed as an argument to the another function, which executed later

function orderFood(callback)
{
    console.log("Preparing Food")

    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    }, 3000)
}

function foodDeliver()
{
    console.log("Food Has been Delivered to the Customer")
}

//orderFood(foodDeliver)

function processPayment(amount, callback)
{
    console.log("Processing Payment: " + amount)

    setTimeout(()=>{
        const paymentSuccess = false
        
        if(paymentSuccess)
        {
            callback("Success", amount)
        }
        else
        {
            callback("Failed", amount)
        }
    }, 3000)
}

function paymentResult(status, amount)
{
    if(status==="Success")
    {
        console.log("Payment of Rs. ", amount , "completed successfully")
    }
    else
    {
        console.log("Payment of Rs. ", amount , "Failed")
    }
}

//processPayment(2500, paymentResult)

//Callback Hell Problem

function login(callback)
{
    console.log("1. Login Successful")
    
    setTimeout(()=>{
        callback()
    }, 2000)
}

function getProfile(callback)
{
    console.log("2. Profile Loaded")
    
    setTimeout(()=>{
        callback()
    }, 2000)
}

function getOrder(callback)
{
    console.log("3. Order Received")
    setTimeout(()=>{
        callback()
    }, 2000)
}

function makePayment(callback)
{
    console.log("4. Payment Successful")
    setTimeout(()=>{
        callback()
    }, 2000)
}
function check()
{
    
}

login(()=>{
    getProfile(()=>{
        getProfile(()=>{
            makePayment(()=>{
                console.log("5. Process Completed")
            })
        })
    })
})
