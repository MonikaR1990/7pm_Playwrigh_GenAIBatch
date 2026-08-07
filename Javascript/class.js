//class 
//Class is a blueprint which is used used to create objects
//class is a blueprint that defines the properties and behaviours (methods) of an Object

//In includes
//1. Properites (variables)
//2. methods (functions)

class Hotel
{
    tea = 15
    coffee = 20

    displayRate()
    {
        console.log(this.tea)
        console.log(this.coffee)
    }
}

let server1 = new Hotel()
console.log(server1.coffee)
console.log(server1.tea)

server1.displayRate()

let server2 = new Hotel()
server2.displayRate()

//this it referes current object

let server3 = new Hotel()

class Student
{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    display()
    {
        console.log("Student Name: " + this.name)
        console.log("Student Age: " + this.age)
    }
}

let s1 = new Student("Bala", 25)
s1.display()

//A constructor is a special method that is automatically called when an object is created. It is used to initialize the object's properities

class Animal
{
    constructor()
    {
        
    }
    sleep()
    {
        console.log("Sleeping")
    }
    eat()
    {
        console.log("Eating")
    }
}

let a = new Animal()
a.sleep()
a.eat()


class BankAccount
{
    constructor(accountNumber, accountHolder, balance)
    {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }
    deposit(amount)
    {
        if(amount>=0)
        {
            this.balance = this.balance + amount
            console.log("Amount Deposited: " + "Rs." + amount)
        }
        else
        {
            console.log("Invalid Deposit Amount")
        }
    }
    withdraw(amount)
    {
        if(amount<=this.balance)
        {
            this.balance = this.balance - amount
            console.log("Amount Withdrawn: " + "Rs." + amount)
        }
        else
        {
            console.log("Insufficient Balance")
        }
    }
    showBalance()
    {
        console.log("Balance: " + this.balance)
    }

}

let ba = new BankAccount("ICICI55657", "Bala", 5000)
ba.deposit(2000)
ba.withdraw(3000)
ba.showBalance()

//Constructor
//Initialize data - Set initial value for an Object / Give properties initial/default values
//Avoid assigining properties manually
//Prepare an Object

//new --> create Object --> constructor initializes object --> object ready 