//ArrowFunction

let add = (a, b)=>console.log(a+b)

add(5, 5)

let greet = ()=>console.log("Hello")

greet()

let greetings = (name, age) => {
    console.log("Hello " , name)
    console.log("Age ", age)
}

greetings("Mani", 25)

let squareRoot = a => { 
    return a*a   //Explicit return
}

console.log(squareRoot(5)) //25

let squareRoot1 = a => console.log(a*a)

squareRoot1(5) //25

let squareRoot2 = a => a*a //implicit return

console.log(squareRoot2(5))


setTimeout(()=>{
    console.log("Hello")
}, 3000)

salaryCalculation(5000, 3000, 2000)

let salaryCalculation = (basic, hra, allowance)=>
{
    let salary = basic + hra + allowance
    console.log(salary)
}


