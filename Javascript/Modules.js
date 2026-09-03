export function greet()
{
    console.log("Welcome")
}

export function add(a, b)
{
    console.log(a+b)
}

export function sub(a, b)
{
    console.log(a-b)
}

export const message = "Hello JavaScript"

export let fruits = ["Apple", "Orange", "Mango"]

export let user = {
    uname: "Praveen",
    uid: 1001,
    uaddress: "Chennai", 
    uphone: 8787987898,
    uemail: "praveen@gmail.com"
}


// greet()

// greet()

// export {
//     greet,
//     add,
//     sub
// }

export class Students
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

let s1 = new Students("Bala", 101)
s1.display()


export default class Animal
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}



//export default let pi = 3.14 //default is not to declare a default value