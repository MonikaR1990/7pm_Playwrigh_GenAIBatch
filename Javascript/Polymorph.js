//Poly - Many
//Morph - Form

//Polymorphism has two types
//1. Method Overloading (Compile Time Polymorphism) //JavaScript not support it
//2. Method Overriding (Run Time Polymorphism)

class Addition
{
    add(a, b)
    {
        console.log(a+b)
    }
    add(a, b, c)
    {
        console.log(a+b+c)
    }
    add(a, b, c, d)
    {
        console.log(a+b+c+d)
    }
}

let sum = new Addition()
sum.add(5, 6)
sum.add(5,6,5)

class Animal
{
    sound()
    {
        console.log("Animal Makes Sound")
    }
}

class Dog extends Animal
{
    sound()
    {
        console.log("Barking")
    }
}
class Cat extends Animal
{
    sound()
    {
        console.log("Meow")
    }
}
class Lion extends Animal
{
    sound()
    {
        console.log("Roaring")
    }
}

let d;

d = new Dog()
d.sound()

d = new Cat()
d.sound()

d = new Lion()
d.sound()

class Payment
{
    pay(amount)
    {
        console.log("Paid " , amount, " using COD")
    }
}

class UPI extends Payment
{
    pay(amount)
    {
        console.log("Paid " , amount, " using UPI")
    }
}

class CreditCard
{
    pay(amount)
    {
        console.log("Paid " , amount, " using Credit Card")
    }
}

class Wallet
{
    pay(amount)
    {
        console.log("Paid " , amount, " using Wallet")
    }
}

let p;

p = new Wallet()
p.pay(2000)