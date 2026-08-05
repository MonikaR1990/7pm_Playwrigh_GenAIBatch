//Function is a reusable block of code which perform specific task

salaryCalculation(5000, 3000, 2000) //hoising

function greet()     //Function defination without parameter
{
    console.log("Welcome")
}

greet() //Function call

greet()

function greeting(name) //with parameter
{
    console.log("Hello " + name)
}

greeting("Monika")

function add(a, b)
{
    console.log(a+b)
}

add(5, 5)

add("Bala", "G")

function squareRoot(a)
{
    console.log(a*a)
}

squareRoot(5)

function salaryCalculation(basic, hra, allowance)
{
    let salary = basic + hra + allowance
    console.log(salary)
}

// let bonus = 3000
// salaryCalculation(20000, 5000, 2000) + bonus

function salaryCalculate(basic, hra, allowance)
{
    let salary = basic + hra + allowance
    return salary
}

let bonus = 3000
console.log(salaryCalculate(20000, 5000, 2000) + bonus)

function sum(a, b)
{
    return a+b
}

console.log(sum(5, 10))

let newSum = 15 + 15
console.log(newSum)

function withdraw(amount, balance)
{
    if(amount<=balance)
    {
        console.log("Withdraw Successful")
        console.log("Remaining Balance: ", balance-amount)
    }
    else
    {
        console.log("Insufficient Balance")
    }
}

withdraw(2000, 1000)

// function calculateTotal(price, quantity)
// {
//     let total = price * quantity
//     console.log("Total Amount: ", total)
// }

// calculateTotal(500, 3)

function bookTrainTicket(name, source, destination)
{
    console.log("Passanger: ", name)
    console.log("From: ", source)
    console.log("To: ", destination)
    console.log("Ticked Booked Successfully")
}

bookTrainTicket("Bala", "Chennai", "Trichy")


function calculateTotal(price, quantity)
{
    let total = price * quantity
    return "Total Amount: ", total
}

console.log(calculateTotal(500, 3) - 100) //1500


function canVote(age)
{
    if(age>=18)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(canVote(12))

let result = canVote(15)



