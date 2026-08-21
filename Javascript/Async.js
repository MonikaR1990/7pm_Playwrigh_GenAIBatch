//Synchronous means one task execute after another task has complete.

//Asynchronous means Javascript doesn't wait for long running task

// console.log("Task 1")
// console.log("Task 2") //Delay
// console.log("Task 3")


console.log("Task 1")

setTimeout(()=>{
    console.log("Task 2")
}, 3000)

console.log("Task 3")

//File Download
//API Call
//File Read/Write
//timer related

setInterval(()=>{
console.log("Hello")
}, 5000)

//Asynchronous Process Achieved in three ways

//callback
//promise
//asyn-await






