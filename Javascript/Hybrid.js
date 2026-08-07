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
    bark()
    {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    meow()
    {
        console.log("Meow")
    }
}
class Lion extends Animal
{
    roar()
    {
        console.log("Roaring")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Palying")
    }
}