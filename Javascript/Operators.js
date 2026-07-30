//Operators
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparision Operators
//4. Logical Operators
//5. Unary Operators
//6. String Operators
//7. Ternary Operators
//8. typeOf Operators

//1. Arithmetic Operators (+, -, *, /, %)

let a = 10
let b = 20

console.log(a+b) 
console.log(a-b)
console.log(a*b)
console.log(a/b)

//2. Assignment Operators (=, +=, -=, *=, /=)

let c = 10

c += 5 // c = c + 5  //15

c -= 5 // c = c - 5  //10

c *= 5 // c = c * 5  //50

c /= 5 // c = c / 5  //10

console.log(c)

//3. Comparision Operators

console.log(5=="5") 

console.log(5==="5") //strict equal

console.log(5!=="5") //number 5 not equal string 5 

console.log(5>5)

console.log(5>=5)


//4. Logical Operators (&&, ||, !)

console.log((5>=5) && (5==5) && (5==="5"))

console.log((5<5) || (5>5) || (5==="5"))

//let hasVoterID = true

//console.log(!hasVoterID)

console.log(!0)

console.log(!1)
console.log(!2)
console.log(!-5)
console.log(!"Hello")
console.log(!undefined)
console.log(!null)
console.log(!NaN)

//Unary Operator
let x = 5

console.log(x++) //5  post increment 

console.log(x)  //6

console.log(x--) //6  post decrement

console.log(x)

console.log(++x) // pre increment

console.log(--x)

let y = -5 //(number sign value)

//String Operator

let result = "Five" + "Five"
console.log(result)


//Ternary

let age = 25
let hasVoterId = false

let voterStatus = ((age>=18) && hasVoterId) ? "Eligibel" : "Not Eligible"
console.log(voterStatus)

let color = "Red"

let signal = (color === "Green") ? "GO" : "STOP"
console.log(signal)

//typeOf Operator

let p; //declaration

console.log(typeof(color))
console.log(typeof(hasVoterId))
console.log(typeof(p))