//TypeScript = JavaScript + TypeSaftey
//TypeScript is converted (compiled) into JavaScript (Because TypeScrpit cannot understand the browser or node)

let sname = "Mani"

//sname = true

console.log(sname)

//Variable Declaration

let userName: string = "Meena"

let age: number = 10

console.log(age)

let isActive: boolean = true

let population: bigint = 8878787987987898n

//Compile Time Error handled by Typescript

//Run Time Time Error handled by Javascript 

// //Datatype
// /*
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol
// object
// class
// interface
// enum */

//Opertors
/*
Arithmetic
Assignment
Comparision
Logical
Unary
Ternary
String
typeOf */

for(let i:number = 1; i<=5; i++)
{
    console.log(i)
}

let fruits = ["Apple", "Orange", "Banana", 100, false] //Tuple

fruits.push(100)

fruits.push(true)

console.log(fruits)


let animals: string[] = ["Dog", "Cat", "Rat"]

let animal: string = "Dog"

let numbers: number[] = [1, 2, 3, 4, 5]

for(let n of numbers)
{
    console.log(n)
}

// let user = {
//     name: "Bala",
//     id: 1010,
//     isActive: true
// }

let user: {
    name: string
    id: number
    isActive: boolean
} = {
    name: "Bala",
    id: 1010,
    isActive: false
}

let person: {
    pname: string
    age: number 
} = {
    pname: "Mani",
    age: 25
}

function add(a: number, b: number)
{
    console.log(a+b)
}

add(5, 5)

function greet(name: string)
{
    console.log(`Hello ${name}`)
} 

class Student
{
    name: string
    id: number

    //Properties
    constructor(name: string, id: number)
    {
        this.name = name
        this.id = id
    }
    //methods
    display(): void
    {
        console.log(this.name)
        console.log(this.id)
    }
    showName(): string
    {
        return this.name
    }
    showId(): number
    {
        return this.id
    }
}

let s = new Student("Bala", 100)
s.display()
//s.show()

class Hotel
{
    tea: number
    coffee: number
    menu: string
    constructor(tea: number, coffee: number, menu: string)
    {
        this.tea = tea
        this.coffee = coffee
        this.menu = menu
    }
    displayRate(): void
    {
        console.log(this.tea)
        console.log(this.coffee)
    }
    showTodayMenu(): void
    {
        console.log(`Today's Breakfast menu is: ${this.menu}`)
    }
}

let h = new Hotel(15, 20, "Pongal")
h.displayRate()
h.showTodayMenu()

//Employee

//perperities(ename, eid, eaddress, esalary, departmet)

//methods(diplayEmpDetails(ename, eid, eadd, departme))
//(showEmployeeSalary eSalary)

//Abstraction
//Hiding internal implementation details and showing only the necessary features to the users

//abstract
//interface

abstract class Animal
{
    abstract sound(): void //unimplemented method
    abstract eat(): void

    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal
{
    sound(): void {
        console.log("Barking")
    }
    eat(): void {
        console.log("Eating Cookies")
    }
}

class Cat extends Animal
{
    sound(): void {
        console.log("Meow")
    }
    eat(): void {
        console.log("Drinking Milk")
    }
}

let a;

a = new Dog()
a.sound()
a.eat()

a = new Cat()
a.sound()
a.eat()

interface Animals
{
   sound(): void //abstract method //unimplemented method
   eat(): void
}

class Dogs implements Animals
{
    sound(): void {
        console.log("Barking")
    }
    eat(): void {
        
    }
}
class Cats implements Animals
{
    sound(): void {
        console.log("Meow")
    }
    eat(): void {
        
    }
}

//100% abstraction ==> Interface ==> normal method not allowed inside interface

let b;

b = new Dogs()
b.sound()

b = new Cats()
b.sound()


interface student
{
    name: string
    id: number
    age: number
    city: string
    state?: string    //? optinal property

    display(): void
    
}

let s1:student = {
    name: "Praveen",
    id: 101,
    age: 22,
    city: "Trichy",
    state: "Tamilnadu",

    display()
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.age)
    }
}

let s2: student = {
    name: "Mani",
    id: 102,
    age: 23,
    city: "Madurai",
    display(): void
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.age)
    }
}

let s3: student = {
    name: "Mani",
    id: 102,
    age: 23,
    city: "Madurai",
    display(): void
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.age)
    }
    
}



