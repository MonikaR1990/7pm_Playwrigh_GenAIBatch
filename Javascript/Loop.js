//Looping
//Loop means executes the block of code repeatedly until the condition becomes false.

//for
//while loop
//do-while loop

//for loop
for(let i = 1; i<=5; i++)
{
    console.log(i)
}

//Send Notification to 100 users
for(let i = 1; i<=100; i++)
{
    console.log("Notification sent to user " + i)
}


//Sum of numbers from 1 to 5
let sum = 0

for(let i = 1; i<=5; i++)
{
    sum += i  //sum = sum + i
}

console.log(sum)

/*
i = 1  1<=5  sum = 0+1 ==> 1
i = 2  2<=5  sum = 1+2 ==> 3
i = 3  3<=5  sum = 3+3 ==> 6
i = 4  4<=5  sum = 6+4 ==> 10
i = 5  5<=5  sum = 10+5 ==> 15
6<=5  
*/

//Print Even Number from 1 to 20
for(let i = 2; i<=20; i += 2)
{
    console.log(i)
}

//Print Odd Number from 1 to 20
for(let i = 1; i<=20; i += 2)
{
    console.log(i)
}

//Reverse Numbers (5 to 1)
for(let i = 5; i>=1; i--)
{
    console.log(i)
}

//Multiplication table
let num = 5
for(let i = 1; i<=10; i++)
{
    console.log(i + "X" + num + "=" + (i*num))
}

//Reverse String
let str = "Welcome"
let reverse = "";

for(let i = str.length-1 ; i>=0; i--)
{
    reverse += str[i] // reverse = reverse + str[i]
}

console.log(reverse)

/*
i = 6   6>=0 ==> rev = ""+ str[6] ==> rev = e
i = 5   5>=0 ==> rev = e + str[5] ==> rev = em
i = 4   4>=0 ==> rev = em + str[4] ==> rev = emo
i = 3   3>=0 ==> rev = emo + str[3] ==> rev = emoc
i = 2   2>=0 ==> rev = emoc + str[2] ==> rev = emocl
i = 1   1>=0 ==> rev = emocl + str[1] ==> rev = emocle
i = 0   0>=0 ==> reve = emocle + str[0] ==> rev = emocleW
i = -1  -1>=0
 
*/


//While Loop

// let i = 6

// while(i<=5)
// {
//     console.log(i)
//     i++
// }

//for loop - when we know the iteration, array, 
//while loop - when iteration is unknown, condition based work


//do-while

let i = 6

do
{
    console.log(i)
    i++
} while(i<=5)

const prompt = require("prompt-sync")()

let pin;

do
{
    pin = prompt("Enter Pin")
}while(pin !== "1234")

console.log("Pin approved")



