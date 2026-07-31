//Control Statements or Flows
//1. Conditional Statements
//2. Looping Statements or (Iterative Statement)
//3. Jumping Statement

//1. Conditional Statements
//1. simple if
//2. if...else
//3. else...if ladder
//4. nested if
//5. switch

//simple if
// if(condition)
// {
//    //code
// }

if(false)
{
    console.log("Hello")
}
else
{
    console.log("Hai")
}

//Multiple Conditions check
let mark = 52

if(mark>=90 && mark<=100)
{
    console.log("Grade A")
}
else if(mark>=75 && mark<=89)
{
    console.log("Grade B")
}
else if(mark>=60 && mark<=74)
{
    console.log("Grade C")
}
else if(mark>=50 && mark<=59)
{
    console.log("Grade D")
}
else if(mark>=35 && mark<=49)
{
    console.log("Grade E")
}
else
{
    console.log("Fail")
}

let amount = 7000

if(amount >= 10000)
{
    console.log("20% Discount")
}
else if(amount >= 5000)
{
    console.log("10% Discount")
}
else if(amount >= 2000)
{
    console.log("5% Discount")
}
else
{
    console.log("No Discount")
}

//Nested if
let age = 17
let citizen = "American"
let hasVoterId = false

if(age>=18)
{
    if(citizen==="Indian")
    {
        if(hasVoterId)
        {
            console.log("Able to Vote")
        }
        else
        {
            console.log("Not able to Vote")
        }
    }
    else
    {
        console.log("For Voting Procees you should be Indian")
    }
}
else
{
    console.log("Not Eligible for Vote")
}

if(false)
{
    console.log("Welcome")
}
console.log("TechNG")

//switch
let day = 8 //number

switch(4)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Number")
}

let num1 = 20
let num2 = 10

let op = "/" 

switch(op)
{
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1+num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
    default:
        console.log("Wrong Operator")
}


let light = "Yellow"


switch(light)
{
    case "Red":
        console.log("Stop")
        break
    case "Green":
        console.log("Go")
        break
    case "Yellow":
        console.log("Ready")
        break
    default:
        console.log("Wrong Signal")
}

