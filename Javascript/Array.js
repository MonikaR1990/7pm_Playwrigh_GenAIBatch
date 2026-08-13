let nameList = ["Bala", "Mani", "Praveen", "Muthu"] //Array Literal Way

//Array is data structure which is used to store multiple values in a single variable
//Array is based on Index. Index value starts from "0"

console.log(nameList)
console.log(nameList[0])
console.log(nameList[1])
console.log(nameList[2])
console.log(nameList[3])

let numbers = new Array(1, 2, 3, 4, 5) //Constructor Way

//let data = [] //Empty Array

let data = ["Rock", "Stone", 100, 200, true, false, undefined, null] //tuple

console.log(numbers)

//Modify (upadate) Array
nameList[1] = "Manikandan"

console.log(nameList)

//Add Elements
nameList.push("Ravi") //Add the element at the end

nameList.unshift("Abi") //Add the element at the beginning

console.log(nameList)

//Remove Elements

nameList.pop()  //Remove the Last element

nameList.shift() //Remove the First Element

console.log(nameList)


//splice() => this method used to add, modify, remove, elements from an array.
/* Original Array will be changed */

let fruits = ["Apple", "Orange", "Mango", "Banana"]

fruits.splice(1, 2) //remove

console.log(fruits)

//1 - Start Index
//2 - how Many elements need to remove count

fruits.splice(1, 0, "Guva", "Papaya")  //add elements

console.log(fruits)

fruits.splice(0, 0, "Cherry")

console.log(fruits)


fruits.splice(0, 2, "Fig", "Pine Apple")


console.log(fruits)

fruits.splice(3, 1)

console.log(fruits)

fruits.splice(0)

console.log(fruits)

//slice() ==> this method used to extract the portion of an array and return new array
/* no changes happen in original array */

let animals = ["Lion", "Tiger", "Dog", "Cat"]

let newAnimals = animals.slice(1, 3)

//1 ==> Start Index (Include)
//3 ==> End Index (Exclude)

console.log(animals)
console.log(newAnimals)

//let upadteAnimals = animals.slice(2)
let upadteAnimals = animals.slice(-2)

console.log(animals)
console.log(upadteAnimals)

//splice()
//1. Modifying the orignal by add, modify, remove elements from an array. Original array getting changed

//slice()
//It mainly extract the portion of an array and it do not change the original array

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1.concat(arr2)) //Merge two arrays

let course = ["Java", "JS", "Python", "C", "C++", "Java"]

for(let skill of course)
{
    console.log(skill)
}

for(let i = 0; i<course.length; i++)
{
    console.log(course[i])
}

console.log(course.join("-"))
console.log(course.includes("Python"))
console.log(course.indexOf("Java"))
console.log(course.lastIndexOf("Java"))

//find()

let num1 = [1, 2, 3, 4, 5]

let num2 = num1.find(x=>x>2) //Returns the first matching element

console.log(num2)

//filter

let num3 = num1.filter(x=>x>=3) //Return all the matching elements from the array

console.log(num3)

let num4 = num1.map(n=>n*5)

console.log(num4) //Transform each elements from an Array

let priceList = [100, 200, 300, 400, 500]

let newPriceList = priceList.map(x=>x+50)

console.log(newPriceList)

//Looping

//length is an important property in an array. 
//it is used to find the total number of elements in an array
console.log(newPriceList.length)

let listNumbers = [11, 22, 33, 44, 55, 66, 77, 88, 99]

// for(let i = 0; i<listNumbers.length; i++)
// {
//     console.log(listNumbers[i])
// }

/*
listNumbers[0] ==> 11
listNumbers[1] ==> 22
listNumbers[2] ==> 33
listNumbers[3] ==> 44
listNumbers[4] ==> 55
listNumbers[5] ==> 66
listNumbers[6] ==> 77
listNumbers[7] ==> 88
listNumbers[8] ==> 99 */

//for...of
for(let l of listNumbers)
{
    if(l>=55)
    {
    console.log(l)
    } 
}

//Array Destuctruting 

let superHeros = ["Ironman", "Hulk", "Spiderman", "Batman", "Captain America"]

console.log(superHeros)

let [s1, s2, s3] = superHeros

console.log(s1)























