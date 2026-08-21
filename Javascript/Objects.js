// let name = "Bala"
// let age = 25
// let height = 5.5
// let weight = 55

let person = {
    name: "Bala",
    age: 25,
    height: 5.5,
    weight: 55
}

//Object is a collection of key-value pairs used to represents the real world enitity

let car = {
    brand: "TATA",
    color: "Red",
    speed: 120,
    price: 800000
}

console.log(car)
console.log(car.price)
console.log(person.age)

//Modyfy the peroperty values
car.color = "White"
person.age = 35

console.log(car)
console.log(person)

//Accessing Properties
console.log(car.brand) // Dot Notation
console.log(person.name)

//Bracket Notation
console.log(car["speed"])

car.hasDocument = true

console.log(car)

//Add Properties to the Object

let student = {
    id: 101
}

student.name = "Bala"
student.age = 25

console.log(student)

student.age = 28

console.log(student)

delete student.age

console.log(student)

let employee = {
    name: "Mani",
    id: 101,
    age: 33,
    address:          //Nested Object
    {
        city: "Trichy",
        state: "Tamilnadu"
    },
    display()
    {
        console.log(this.name)
    },
    greet: function()
    {
       return "Hello"
    },
    skills:["Java", "JS", "Python", "C#"]
}
console.log(employee.address.city)
console.log(employee["address"]["city"])

employee.display()
console.log(employee.greet())
console.log(employee.skills[2])
employee.skills[3] = "C#.net"
console.log(employee)

let teacher = [
    {name: "Raghu", id:101},
    {name: "Babu", id:102},
    {name: "Vasu", id:103}
]

console.log(teacher[0])

//for..in loop
for(let key in employee)
{
    console.log(key)
}

for(let key in employee)
{
    console.log(employee[key])
}

//Object.key

let carKeys = Object.keys(car)
console.log(carKeys)

console.log(Object.values(car))

console.log(Object.entries(car))

let laptop ={
    brand: "Dell",
    RAM: "8 GB",
    generation: "intel core 6"
}

//Object.freeze(laptop)

// laptop.brand = "HP"
// laptop.price = 45000
// delete laptop.generation

//Object.seal(laptop)

laptop.brand = "HP"
laptop.price = 45000
delete laptop.generation

console.log(laptop)

const player = {
    number: 10,
    name: "Sachin",
    age: 50
}

//Extracting the properties from an object and store them directly into variables

// const {number, name, age} = player

// console.log(number)
// console.log(name)
// console.log(age)

const updatePlayer = {
    ...player,
    city: "Mumbai",
    team: "MI"
}

console.log(updatePlayer)

const {number, name, age, ...remaining} = updatePlayer

console.log(number)
console.log(name)
console.log(age)
console.log(remaining)

let obj1 = {a:1}
let obj2 = {b:2}

let obj3 = Object.assign(obj1, obj2, {c:3})
console.log(obj3)

let ob1 = {
    name: "Mani",
    age: 23
}

let ob2 = ob1 //Shallow Copy

ob1.name = "Ravi"
ob1.id = "101"

console.log(ob1)
console.log(ob2)

