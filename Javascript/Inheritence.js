//Inheritance

class Animal                             //Parent Class //Super Class //Base Class
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

class Dog extends Animal                //Child Class //Derived Class
{
    sound()
    {
        console.log("Barking")
    }
}

let d = new Dog()
d.sound()
d.eat()
d.sleep()

//Inheritance one class acquire/reuse the properities and methods of another class using "extends" keyword

//Types of Inheritance
//1. Single Inheritance
//2. Multilevel Inheritance
//3. Heirachical Inheritence
//4. Hybrid Inheritance
