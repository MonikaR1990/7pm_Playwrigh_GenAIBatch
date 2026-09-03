//ES ==> ECMA Script 2015
//ES 1, 2, 3, 4, 5
//ES 6 ==> new features

//1. let, const

// let name = "Bala"

// name = "Mani"

// //let ename = "Vasu"

// const ename = "Ravi"

// //no reassign, re-declaration

// calcualteSalary(10000, 5000, 3000)

// function calcualteSalary(basic, hra, allowance)
// {
//     let salary = basic+hra+allowance
//     console.log(salary)
// }




// // console.log(salary) //Reference Error

// // console.log(x)

// // let x = 10

// // // let y //declaration

// // // y = 10;

// // let y = 10 //initialization

// // const z = 100 //compulsory initialization need

// // //2. Arrow Fuction

// // let add = (a, b) => console.log(a+b)  //void (multiple parameters)

// // let greet = () => console.log("Hello") //without parameter

//  let greetings = name => console.log(name)

// //let squareRoot = n => n*n  //(implicit return)

// let squareRoot = n => {      //(Explicit return)
//     return n*n 
// }

// calculateSalary(10000, 5000, 3000) //reference error

// let calculateSalary = (basic, hra, allowance) => 
// {
//     let salary = basic + hra + allowance
//     console.log(salary)
// }

//3. Template Literals

let ename = "Mani"
let id = 101
let age = 25

console.log("Employee Name: " + ename + " Employee ID: " + id + " Employee Age: " + age)

console.log(`Employee Name: ${ename} Employee ID: ${id} Employee age: ${age}`)
//`` --> Backticks

let address = "No 10, East Street, Madurai"

console.log(`My name is ${ename} and my age is ${age} and my address is ${address}`)

//${} --> for variable access

//4. Default Parameter

function greet(name="Guest")
{
    console.log(`Hello ${name}`)
}

greet()
greet("Mani")

//5. Destructing

const fruits = ["Mango", "Orange", "Apple", "Guva"]

console.log(fruits[1])

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

let user = {
    uname: "Praveen",
    uid: 1001,
    uaddress: "Chennai", 
    uphone: 8787987898,
    uemail: "praveen@gmail.com"
}

console.log(user.uname)

let {uname, uid, uaddress, ...uremaining} = user

console.log(uname)
console.log(uid)
console.log(uaddress)
console.log(uremaining)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [n1, n2, n3, ...remining] = numbers //...Rest Operator

console.log(n1)
console.log(n2)
console.log(n3)
console.log(remining)

let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6] //...spread

console.log(arr2)

let studentName = {
    name: "Bala"
}

let studentDetails = {
    ...studentName,
    age: 13,
    id: 101
}



console.log(studentDetails)

//class concept
//Promise (async - await)
//Map
//Set

//for...of
//for...in

//Symbol

let games = ["Cricket", "football", "Volloyball", "Tennins"]

for(let g of games)
{
    console.log(g)
}

for(let s in studentDetails)
{
    console.log(s) //key
    console.log(studentDetails[s]) //value
}




























