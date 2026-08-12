//Abstraction

//It hides the internal implementation and showing only necessary features to the user

//Abstraction achieved in 2 ways - not availble in JavaScript
//1. Abstract Class
//2. Interface

function add(a, b)
{
    console.log(a+b)
}

add(5, 10)

class Car
{
    start()
    {
        this.#checkEngine()
        console.log("Engin Started")
    }

    #checkEngine() //Private Method
    {
        console.log("Checking Engine")   
    }
}

let c = new Car()
c.start()


class Order
{
    placeOrder()
    {
        this.#validateProduct()
        this.#processPayment()
    }
    #validateProduct()
    {
        console.log("Product Availble")
    }
    #processPayment()
    {
        console.log("Payment Completed")
    }
}

let o = new Order()
o.placeOrder()